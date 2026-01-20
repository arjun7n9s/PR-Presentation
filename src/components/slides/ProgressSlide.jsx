import React from 'react';
import { motion } from 'framer-motion';
import pcbImg from '../../assets/pcb_design.png';

export default function ProgressSlide() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full gap-8 md:gap-16 px-8 max-w-7xl mx-auto">

            {/* Left Content */}
            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                    Our <span className="text-primary">Progress</span>
                </h2>
                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                    We made our circuit with <span className="text-white font-semibold">custom designed</span> and <span className="text-white font-semibold">printed circuit board</span>.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </motion.div>

            {/* Right Visual */}
            <motion.div
                className="flex-1 w-full max-w-lg"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-surface/50 backdrop-blur-sm p-2">
                    <img
                        src={pcbImg}
                        alt="Custom PCB Design"
                        className="w-full h-auto rounded-xl"
                    />
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl" />
                </div>
            </motion.div>

        </div>
    );
}
