"use client";

import { Users, Shield } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6 text-white">
                        Powering AI Conversations
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        See how developers are building with our LangGraph platform
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <p className="text-white/80 mb-6 italic leading-relaxed">
                            &quot;The Vector RAG integration is phenomenal. We can now query our entire documentation library with natural language, and the responses are contextually perfect. The caching layer saves us thousands in API costs.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-violet-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">David Kim</p>
                                <p className="text-white/60 text-sm">AI Engineer, DataFlow AI</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <p className="text-white/80 mb-6 italic leading-relaxed">
                            &quot;The LangGraph SDK compatibility made migration seamless. The master workflow's intelligent routing between general chat and document queries is exactly what we needed for our customer support AI.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">Sarah Martinez</p>
                                <p className="text-white/60 text-sm">CTO, SupportBot Inc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
