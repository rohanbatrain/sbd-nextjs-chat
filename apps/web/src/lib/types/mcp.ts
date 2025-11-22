/**
 * TypeScript types for MCP (Model Context Protocol) integration
 */

export interface MCPToolCall {
    tool_name: string;
    parameters: Record<string, any>;
    result?: any;
    status: 'pending' | 'success' | 'error';
    error?: string;
    timestamp: string;
}

export interface MCPTool {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: Record<string, any>;
        required?: string[];
    };
    category?: string;
}

export interface MCPServerInfo {
    available: boolean;
    name?: string;
    version?: string;
    tool_count?: number;
    resource_count?: number;
    prompt_count?: number;
    tools?: string[];
    resources?: string[];
    prompts?: string[];
}

export interface MCPToolExecutionRequest {
    tool_name: string;
    parameters: Record<string, any>;
}

export interface MCPToolExecutionResponse {
    success: boolean;
    result?: any;
    error?: string;
    execution_time_ms?: number;
}
