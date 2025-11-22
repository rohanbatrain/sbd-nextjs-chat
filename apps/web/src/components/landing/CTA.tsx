"use client";

import { motion } from "framer-motion";
import { MessageSquare, Brain, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-6xl bp3:text-4xl bp4:text-5xl font-light mb-6 text-white">
                    Ready to Experience AI Conversations?
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
                    Join developers and teams using our LangGraph-powered platform for intelligent, context-aware AI conversations with advanced workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                        <MessageSquare className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Multi-Agent AI</h3>
                        <p className="text-white/70 text-sm">Complex workflows with multiple AI agents</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                        <Brain className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Persistent Memory</h3>
                        <p className="text-white/70 text-sm">Context-aware conversations that remember</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                        <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Tool Integration</h3>
                        <p className="text-white/70 text-sm">Connect AI to external tools and APIs</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                        <Zap className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Streaming</h3>
                        <p className="text-white/70 text-sm">Instant responses with streaming support</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/auth/signup">
                        <button className="bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-4 text-white font-medium text-lg rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
                            Start Chatting
                        </button>
                    </Link>
                    <Link href="/dashboard">
                        <button className="bg-white/10 backdrop-blur-sm px-8 py-4 text-white font-medium text-lg rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                            Try Demo
                        </button>
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-white/60 mb-4">Powered by LangGraph and OpenAI</p>
                    <div className="flex justify-center gap-8 text-white/40 text-sm">
                        <span>Open Source</span>
                        <span>•</span>
                        <span>Self-Hosted</span>
                        <span>•</span>
                        <span>Enterprise Ready</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
