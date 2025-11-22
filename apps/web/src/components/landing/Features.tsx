"use client";

import { motion } from "framer-motion";
import { Database, Brain, Code, GitBranch, Star, Users, Shield } from "lucide-react";
import { useState } from "react";

export default function Features() {
    const [activeTab, setActiveTab] = useState<'messaging' | 'collaboration' | 'privacy'>('messaging');

    return (
        <section className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6 text-white"
                    >
                        AI-Powered Conversation Platform
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                    >
                        LangGraph-powered AI with Vector RAG, intelligent routing, and real-time streaming
                    </motion.p>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    onClick={() => setActiveTab('messaging')}
                                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'messaging'
                                        ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    AI Intelligence
                                </button>
                                <button
                                    onClick={() => setActiveTab('collaboration')}
                                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'collaboration'
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Performance
                                </button>
                                <button
                                    onClick={() => setActiveTab('privacy')}
                                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'privacy'
                                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Architecture
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Intelligence Tab */}
                {activeTab === 'messaging' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    >
                        <FeatureCard
                            icon={<Brain className="w-6 h-6 text-violet-400" />}
                            iconBg="bg-violet-500/20"
                            title="LangGraph AI Workflows"
                            description="Powered by LangGraph for intelligent multi-step reasoning and task orchestration."
                            list={[
                                "Master workflow orchestrator",
                                "Intelligent routing between workflows",
                                "Multi-step reasoning chains",
                                "State management across conversations"
                            ]}
                        />
                        <FeatureCard
                            icon={<Database className="w-6 h-6 text-purple-400" />}
                            iconBg="bg-purple-500/20"
                            title="Vector RAG System"
                            description="Retrieval-augmented generation with vector search for document-based queries."
                            list={[
                                "Semantic document search",
                                "Context-aware responses",
                                "Knowledge base integration",
                                "Source attribution"
                            ]}
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Star className="w-6 h-6 text-pink-400" />}
                            iconBg="bg-pink-500/20"
                            title="Streaming Responses"
                            description="Real-time token streaming for instant feedback and natural conversation flow."
                            list={[
                                "Server-sent events (SSE)",
                                "Token-by-token streaming",
                                "Progress indicators",
                                "Interrupt handling"
                            ]}
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-blue-400" />}
                            iconBg="bg-blue-500/20"
                            title="Tool Calling"
                            description="AI agents can invoke tools and functions to accomplish complex tasks."
                            list={[
                                "Dynamic tool invocation",
                                "Execution tracking",
                                "Error handling",
                                "Tool response visualization"
                            ]}
                            delay={0.3}
                        />
                    </motion.div>
                )}

                {/* Performance Tab */}
                {activeTab === 'collaboration' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    >
                        <FeatureCard
                            icon={<GitBranch className="w-6 h-6 text-blue-400" />}
                            iconBg="bg-blue-500/20"
                            title="Query Caching"
                            description="Redis-powered caching reduces redundant LLM calls and improves response times."
                            list={[
                                "1-hour TTL caching",
                                "Cache hit/miss tracking",
                                "Query hash-based lookup",
                                "Automatic cache invalidation"
                            ]}
                        />
                        <FeatureCard
                            icon={<Users className="w-6 h-6 text-cyan-400" />}
                            iconBg="bg-cyan-500/20"
                            title="Session Management"
                            description="Persistent conversation threads with full history and context retention."
                            list={[
                                "Multi-session support",
                                "Conversation history",
                                "Session metadata",
                                "Token usage tracking"
                            ]}
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Shield className="w-6 h-6 text-green-400" />}
                            iconBg="bg-green-500/20"
                            title="Metrics & Monitoring"
                            description="Comprehensive tracking of performance, costs, and system health."
                            list={[
                                "Token usage analytics",
                                "Cost tracking per session",
                                "Cache performance metrics",
                                "Error rate monitoring"
                            ]}
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<Star className="w-6 h-6 text-orange-400" />}
                            iconBg="bg-orange-500/20"
                            title="Agent Inbox"
                            description="Handle interrupted workflows and pending actions with intelligent queuing."
                            list={[
                                "Action interruption handling",
                                "Pending task management",
                                "User approval workflows",
                                "Resume from interruption"
                            ]}
                            delay={0.3}
                        />
                    </motion.div>
                )}

                {/* Architecture Tab */}
                {activeTab === 'privacy' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    >
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-purple-400" />}
                            iconBg="bg-purple-500/20"
                            title="LangGraph SDK Compatible"
                            description="Full compatibility with @langchain/langgraph-sdk for seamless integration."
                            list={[
                                "Thread management API",
                                "State persistence",
                                "Stream protocol support",
                                "Graph info endpoints"
                            ]}
                        />
                        <FeatureCard
                            icon={<Database className="w-6 h-6 text-amber-400" />}
                            iconBg="bg-amber-500/20"
                            title="MongoDB + Redis Stack"
                            description="Robust data persistence with MongoDB and Redis for caching and real-time features."
                            list={[
                                "Message persistence",
                                "Session storage",
                                "Redis caching layer",
                                "Token usage tracking"
                            ]}
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Shield className="w-6 h-6 text-cyan-400" />}
                            iconBg="bg-cyan-500/20"
                            title="Secure Authentication"
                            description="JWT-based authentication with comprehensive security features."
                            list={[
                                "JWT token validation",
                                "User ownership verification",
                                "Session-based access control",
                                "Rate limiting"
                            ]}
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<GitBranch className="w-6 h-6 text-green-400" />}
                            iconBg="bg-green-500/20"
                            title="Intelligent Routing"
                            description="Master workflow automatically routes queries to the appropriate AI workflow."
                            list={[
                                "Intent detection",
                                "Vector vs general routing",
                                "Knowledge base awareness",
                                "Fallback handling"
                            ]}
                            delay={0.3}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
}

function FeatureCard({ icon, iconBg, title, description, list, delay = 0 }: {
    icon: React.ReactNode,
    iconBg: string,
    title: string,
    description: string,
    list: string[],
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
                    {icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-white/80 mb-4">
                {description}
            </p>
            <ul className="text-white/70 space-y-2">
                {list.map((item, i) => (
                    <li key={i}>• {item}</li>
                ))}
            </ul>
        </motion.div>
    );
}
