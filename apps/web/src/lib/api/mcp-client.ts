/**
 * MCP API Client for Second Brain Database
 */

import type {
    MCPServerInfo,
    MCPTool,
    MCPToolExecutionRequest,
    MCPToolExecutionResponse,
} from '../types/mcp';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Get authentication token from localStorage
 */
function getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
}

/**
 * Get MCP server status and info
 */
export async function getMCPServerInfo(): Promise<MCPServerInfo> {
    const token = getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/mcp/status`, {
        method: 'GET',
        headers,
    });

    if (!response.ok) {
        return { available: false };
    }

    return response.json();
}

/**
 * List available MCP tools
 */
export async function listMCPTools(): Promise<MCPTool[]> {
    const token = getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/mcp/tools`, {
        method: 'GET',
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Failed to list tools' }));
        throw new Error(error.detail || 'Failed to list MCP tools');
    }

    return response.json();
}

/**
 * Execute an MCP tool
 */
export async function executeMCPTool(
    request: MCPToolExecutionRequest
): Promise<MCPToolExecutionResponse> {
    const token = getAuthToken();
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(
        `${API_URL}/mcp/tools/${request.tool_name}/execute`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ parameters: request.parameters }),
        }
    );

    if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Tool execution failed' }));
        return {
            success: false,
            error: error.detail || 'Failed to execute MCP tool',
        };
    }

    const result = await response.json();
    return {
        success: true,
        result,
    };
}
