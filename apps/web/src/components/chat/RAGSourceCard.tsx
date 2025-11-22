/**
 * RAG Source Card Component
 * Displays document sources used in RAG responses
 */

import { FileText, ExternalLink } from 'lucide-react';
import type { RAGSource } from '@/lib/types/rag';
import { Card } from '../ui/card';

interface RAGSourceCardProps {
    source: RAGSource;
    index: number;
}

export function RAGSourceCard({ source, index }: RAGSourceCardProps) {
    const { text, score, metadata } = source;
    const filename = metadata.filename || 'Unknown document';
    const page = metadata.page;
    const matchPercentage = Math.round(score * 100);

    return (
        <Card className="p-3 bg-muted/50 border-l-4 border-l-blue-500">
            <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="font-medium text-sm truncate">
                                {filename}
                            </span>
                            {page && (
                                <span className="text-xs text-muted-foreground">
                                    (p. {page})
                                </span>
                            )}
                        </div>
                        <span className="text-xs font-medium text-blue-600 flex-shrink-0">
                            {matchPercentage}% match
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                        &quot;{text.substring(0, 150)}...&quot;
                    </p>
                </div>
            </div>
        </Card>
    );
}

interface RAGSourcesListProps {
    sources: RAGSource[];
}

export function RAGSourcesList({ sources }: RAGSourcesListProps) {
    if (!sources || sources.length === 0) return null;

    return (
        <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Sources ({sources.length})</span>
            </div>
            <div className="space-y-2">
                {sources.map((source, index) => (
                    <RAGSourceCard key={index} source={source} index={index} />
                ))}
            </div>
        </div>
    );
}
