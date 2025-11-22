/**
 * RAG API Client for Second Brain Database
 */

import type {
    RAGQueryRequest,
    RAGQueryResponse,
    DocumentUploadResponse,
    Document,
} from '../types/rag';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Get authentication token from localStorage
 */
function getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
}

/**
 * Upload a document for RAG processing
 */
export async function uploadDocument(
    file: File,
    onProgress?: (progress: number) => void
): Promise<DocumentUploadResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('async_processing', 'true');

    const token = getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/rag/upload`, {
        method: 'POST',
        headers,
        body: formData,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Upload failed' }));
        throw new Error(error.detail || 'Failed to upload document');
    }

    return response.json();
}

/**
 * Query documents using RAG
 */
export async function queryRAG(
    request: RAGQueryRequest
): Promise<RAGQueryResponse> {
    const token = getAuthToken();
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/rag/query`, {
        method: 'POST',
        headers,
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Query failed' }));
        throw new Error(error.detail || 'Failed to query documents');
    }

    return response.json();
}

/**
 * List user's uploaded documents
 */
export async function listDocuments(): Promise<Document[]> {
    const token = getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/rag/documents`, {
        method: 'GET',
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Failed to list documents' }));
        throw new Error(error.detail || 'Failed to list documents');
    }

    return response.json();
}

/**
 * Delete a document
 */
export async function deleteDocument(documentId: string): Promise<void> {
    const token = getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/rag/documents/${documentId}`, {
        method: 'DELETE',
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Failed to delete document' }));
        throw new Error(error.detail || 'Failed to delete document');
    }
}
