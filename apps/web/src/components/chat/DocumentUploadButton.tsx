/**
 * Document Upload Button Component
 * Adds a paperclip button to upload documents for RAG
 */

import { useState, useRef } from 'react';
import { Paperclip, Loader2, Check, X } from 'lucide-react';
import { Button } from '../ui/button';
import { uploadDocument } from '@/lib/api/rag-client';
import { toast } from 'sonner';

interface DocumentUploadButtonProps {
    onUploadComplete?: (documentId: string, filename: string, chunks: number) => void;
    disabled?: boolean;
}

export function DocumentUploadButton({
    onUploadComplete,
    disabled = false,
}: DocumentUploadButtonProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Validate file type
        const allowedTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'text/plain',
            'text/markdown',
        ];

        if (!allowedTypes.includes(file.type)) {
            toast.error('Unsupported file type', {
                description: 'Please upload PDF, DOCX, PPTX, TXT, or MD files.',
            });
            return;
        }

        // Validate file size (max 50MB)
        const maxSize = 50 * 1024 * 1024;
        if (file.size > maxSize) {
            toast.error('File too large', {
                description: 'Please upload files smaller than 50MB.',
            });
            return;
        }

        setIsUploading(true);
        setUploadProgress(0);

        try {
            const result = await uploadDocument(file, (progress) => {
                setUploadProgress(progress);
            });

            toast.success('Document uploaded successfully', {
                description: `${file.name} has been indexed with ${result.chunks_created || 0} chunks.`,
                icon: <Check className="h-4 w-4" />,
            });

            onUploadComplete?.(
                result.document_id,
                file.name,
                result.chunks_created || 0
            );
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Upload failed', {
                description: error instanceof Error ? error.message : 'Failed to upload document',
                icon: <X className="h-4 w-4" />,
            });
        } finally {
            setIsUploading(false);
            setUploadProgress(0);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.pptx,.txt,.md"
                onChange={handleFileSelect}
                className="hidden"
                disabled={disabled || isUploading}
            />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={disabled || isUploading}
                className="h-9 w-9"
                title="Upload document"
            >
                {isUploading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Paperclip className="h-4 w-4" />
                )}
            </Button>
        </>
    );
}
