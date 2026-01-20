import React from 'react';
import { motion } from 'framer-motion';

export default function FutureSlide() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <h1 className="text-6xl md:text-9xl font-display font-black text-white tracking-tighter">
                    THANK <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">YOU</span>
                </h1>

                <div className="flex flex-col gap-2">
                    <p className="text-neutral-400 font-mono text-sm tracking-[0.2em] uppercase">Wireless Ultrasonic Inspection Robot</p>
                    <p className="text-neutral-600 font-mono text-xs">ESP32 • IoT • Cloud • Robotics</p>
                </div>
            </motion.div>
        </div>
    );
}
