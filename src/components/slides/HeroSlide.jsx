import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSlide({ onNext }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-full w-full max-w-7xl mx-auto px-8 md:px-16 relative gap-12 lg:gap-24">

            {/* Left Box: Title */}
            <motion.div
                className="flex-1 text-left z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-secondary text-xl font-mono tracking-widest mb-4 uppercase">PR Project Presentation</h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Wireless Ultrasonic</span> <br /> Inspection Robot
                </h1>
            </motion.div>

            {/* Right Box: Team Card */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="z-10 p-10 rounded-3xl bg-surface/30 border border-white/10 backdrop-blur-xl shadow-2xl min-w-[340px]"
            >
                <div className="flex items-center justify-center gap-3 mb-8 pb-4 border-b border-white/10">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    <p className="text-primary font-bold font-mono text-sm tracking-[0.2em] uppercase whitespace-nowrap">PROJECT TEAM</p>
                    <div className="h-1 w-8 bg-primary rounded-full" />
                </div>

                <div className="flex flex-col gap-6 text-white font-display text-2xl font-bold tracking-wide text-center">
                    <span className="hover:text-primary hover:scale-110 transition-all cursor-default block">Tejesh</span>
                    <span className="hover:text-primary hover:scale-110 transition-all cursor-default block">PavanTeja</span>
                    <span className="hover:text-primary hover:scale-110 transition-all cursor-default block">Kaumudi</span>
                    <span className="hover:text-primary hover:scale-110 transition-all cursor-default block">Suyog</span>
                    <span className="hover:text-primary hover:scale-110 transition-all cursor-default block">Spoorty</span>
                </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-30" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full opacity-20" />
            </div>
        </div>
    );
}
