import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Cpu, ArrowRight } from 'lucide-react';

export default function CoreIdeaSlide() {
    return (
        <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="text-primary font-mono tracking-widest text-sm uppercase">The Paradigm Shift</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">
                    Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digitization</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
                {/* Old Way */}
                <motion.div
                    className="bg-surface/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm opacity-80 hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-neutral-300 mb-4">Traditional</h3>
                    <ul className="space-y-3 text-neutral-400 font-mono text-sm mb-6">
                        <li>• Raw Ultrasonic Waves</li>
                        <li>• Heavy Cables Required</li>
                        <li>• Complex Analog Electronics</li>
                    </ul>
                    <div className="h-20 bg-neutral-900 rounded-lg flex items-center justify-center overflow-hidden relative">
                        <svg className="w-full h-full stroke-neutral-700" viewBox="0 0 100 40">
                            <path d="M0 20 Q 25 40, 50 20 T 100 20" fill="none" strokeWidth="2" />
                        </svg>
                    </div>
                </motion.div>

                {/* The Shift */}
                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(6,182,212,0.6)] z-10"
                    >
                        <ArrowRight className="text-black w-8 h-8" />
                    </motion.div>
                    <motion.p
                        className="text-center font-mono text-primary text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        PROCESS AT EDGE
                    </motion.p>
                </div>

                {/* New Way */}
                <motion.div
                    className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-surface to-surface p-8 rounded-2xl border border-primary/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Wifi className="text-primary w-6 h-6 animate-pulse" />
                        <h3 className="text-2xl font-bold text-white">Smart Edge</h3>
                    </div>

                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <div className="p-1.5 bg-green-500/20 rounded text-green-400"><Cpu size={14} /></div>
                            <span>Digital Thickness Value Only</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <div className="p-1.5 bg-blue-500/20 rounded text-blue-400"><Wifi size={14} /></div>
                            <span>Wireless transmission (MQTT)</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <div className="p-1.5 bg-amber-500/20 rounded text-amber-400"><Zap size={14} /></div>
                            <span>Battery Powered & Light</span>
                        </li>
                    </ul>

                    <div className="p-4 bg-black/40 rounded-lg border border-primary/20 font-mono text-primary text-center tracking-widest text-2xl shadow-inner">
                        9.45 mm
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
