"use client";

import { Github, BookOpen } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">AI Chat</h3>
                        <p className="text-white/70 mb-4 text-sm">
                            LangGraph-powered AI platform with Vector RAG and intelligent workflow orchestration.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/rohanbatrain/second_brain_database" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                            </a>
                            <a href="/docs" target="_blank" rel="noopener noreferrer">
                                <BookOpen className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#ai-intelligence" className="hover:text-white transition-colors">AI Intelligence</a></li>
                            <li><a href="#vector-rag" className="hover:text-white transition-colors">Vector RAG</a></li>
                            <li><a href="#streaming" className="hover:text-white transition-colors">Streaming</a></li>
                            <li><a href="#caching" className="hover:text-white transition-colors">Query Caching</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Developers</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="/api" className="hover:text-white transition-colors">API Reference</a></li>
                            <li><a href="/sdk" className="hover:text-white transition-colors">LangGraph SDK</a></li>
                            <li><a href="/examples" className="hover:text-white transition-colors">Examples</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="https://github.com/rohanbatrain/second_brain_database" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="/changelog" className="hover:text-white transition-colors">Changelog</a></li>
                            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} AI Chat Platform. Powered by LangGraph, FastAPI, and MongoDB.</p>
                </div>
            </div>
        </footer>
    );
}
