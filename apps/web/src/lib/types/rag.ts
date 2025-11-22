/**
 * TypeScript types for RAG (Retrieval-Augmented Generation) integration
 */

export interface RAGSource {
    text: string;
    score: number;
    metadata: {
        document_id?: string;
        filename?: string;
        page?: number;
        chunk_index?: number;
        [key: string]: any;
    };
}

export interface RAGQueryRequest {
    query: string;
    use_llm?: boolean;
    max_results?: number;
    similarity_threshold?: number;
    query_type?: 'semantic' | 'keyword' | 'hybrid';
    conversation_id?: string;
    collection_name?: string;
    include_metadata?: boolean;
    model?: string;
    temperature?: number;
}

export interface RAGQueryResponse {
    query: string;
    answer?: string;
    chunks: RAGSource[];
    sources: Array<{
        document_id: string;
        filename: string;
        score: number;
    }>;
    chunk_count: number;
    timestamp: string;
    processing_time_ms?: number;
}

export interface DocumentUploadResponse {
    document_id: string;
    status: string;
    task_id?: string;
    chunks_created?: number;
    processing_time?: number;
    message: string;
}

export interface Document {
    id: string;
    filename: string;
    user_id: string;
    content?: string;
    chunks?: number;
    status: 'pending' | 'processing' | 'processed' | 'failed';
    created_at: string;
    updated_at: string;
    metadata?: {
        title?: string;
        mime_type?: string;
        file_size?: number;
        processing_time?: number;
        word_count?: number;
        page_count?: number;
    };
}
