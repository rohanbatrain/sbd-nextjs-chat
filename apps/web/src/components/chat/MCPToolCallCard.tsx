/**
 * MCP Tool Call Card Component
 * Displays MCP tool execution in chat messages
 */

import { Wrench, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import type { MCPToolCall } from '@/lib/types/mcp';
import { Card } from '../ui/card';

interface MCPToolCallCardProps {
    toolCall: MCPToolCall;
}

export function MCPToolCallCard({ toolCall }: MCPToolCallCardProps) {
    const { tool_name, parameters, result, status, error } = toolCall;

    const statusIcon = {
        pending: <Loader2 className="h-4 w-4 animate-spin text-blue-500" />,
        success: <CheckCircle2 className="h-4 w-4 text-green-500" />,
        error: <XCircle className="h-4 w-4 text-red-500" />,
    }[status];

    const statusText = {
        pending: 'Executing...',
        success: 'Success',
        error: 'Failed',
    }[status];

    return (
        <Card className="p-3 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-l-amber-500">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-sm">Using tool: {tool_name}</span>
                    <div className="flex items-center gap-1 ml-auto">
                        {statusIcon}
                        <span className="text-xs text-muted-foreground">{statusText}</span>
                    </div>
                </div>

                {Object.keys(parameters).length > 0 && (
                    <div className="pl-6">
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                            Parameters:
                        </p>
                        <ul className="text-xs space-y-0.5">
                            {Object.entries(parameters).map(([key, value]) => (
                                <li key={key} className="text-muted-foreground">
                                    • {key}: <code className="text-xs bg-muted px-1 rounded">{JSON.stringify(value)}</code>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {status === 'success' && result && (
                    <div className="pl-6">
                        <p className="text-xs font-medium text-green-600 mb-1">
                            ✓ Result:
                        </p>
                        <div className="text-xs bg-green-50 dark:bg-green-950/20 p-2 rounded">
                            <pre className="whitespace-pre-wrap break-words">
                                {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                            </pre>
                        </div>
                    </div>
                )}

                {status === 'error' && error && (
                    <div className="pl-6">
                        <p className="text-xs font-medium text-red-600 mb-1">
                            ✗ Error:
                        </p>
                        <p className="text-xs text-red-600">{error}</p>
                    </div>
                )}
            </div>
        </Card>
    );
}

interface MCPToolCallsListProps {
    toolCalls: MCPToolCall[];
}

export function MCPToolCallsList({ toolCalls }: MCPToolCallsListProps) {
    if (!toolCalls || toolCalls.length === 0) return null;

    return (
        <div className="mt-3 space-y-2">
            {toolCalls.map((toolCall, index) => (
                <MCPToolCallCard key={index} toolCall={toolCall} />
            ))}
        </div>
    );
}
