import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CloudRain, Anchor, BatteryWarning } from 'lucide-react';
import crawlerImg from '../../assets/crawler_demo.png';
import manualScanImg from '../../assets/manual_scan.png';

const ProblemItem = ({ icon: Icon, title, description, delay, onHover, onLeave }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-accent/40 hover:bg-white/10 transition-colors cursor-crosshair"
    >
        <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-xl font-display font-bold text-white mb-1">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export default function ProblemSlide() {
    const [hoverState, setHoverState] = useState(null); // 'heavy', 'manual', or null

    return (
        <div className="flex flex-col md:flex-row h-full w-full gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-8 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-mono mb-4">
                        <AlertTriangle size={14} />
                        <span>CRITICAL ISSUES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
                        The Industrial <br /> <span className="text-red-500">Bottle-Neck</span>
                    </h2>
                    <p className="text-xl text-neutral-400">
                        Manual ultrasonic inspection of large steel structures is outdated, dangerous, and inefficient.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    <ProblemItem
                        icon={Anchor}
                        title="Dangerous & Slow"
                        description="Human inspectors must scale large ship hulls and tanks, facing high risks and fatigue."
                        delay={0.2}
                    />
                    <ProblemItem
                        icon={BatteryWarning}
                        title="Heavy Equipment"
                        description="Tethered crawlers suffer from cable drag, resulting in instability and limited range."
                        delay={0.4}
                        onHover={() => setHoverState('heavy')}
                        onLeave={() => setHoverState(null)}
                    />
                    <ProblemItem
                        icon={CloudRain}
                        title="Manual Logging"
                        description="Data is manually recorded, prone to errors, and lacks real-time digitization."
                        delay={0.6}
                        onHover={() => setHoverState('manual')}
                        onLeave={() => setHoverState(null)}
                    />
                </div>
            </div>

            {/* Right Visuals */}
            <div className="flex-1 w-full h-[500px] relative hidden md:block z-10">
                <motion.div
                    className="w-full h-full bg-black rounded-3xl border border-red-500/20 overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <AnimatePresence mode='popLayout'>
                        {hoverState === 'heavy' && (
                            <motion.img
                                key="heavy"
                                src={crawlerImg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 w-full h-full object-cover z-20"
                            />
                        )}
                        {hoverState === 'manual' && (
                            <motion.img
                                key="manual"
                                src={manualScanImg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 w-full h-full object-contain bg-white z-20"
                            />
                        )}
                    </AnimatePresence>

                    {/* YouTube Embed - Always render to keep playing, but covered by overlay when hovering */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8M94TKK8Upc?autoplay=1&mute=1&controls=0&loop=1&playlist=8M94TKK8Upc&start=10"
                            title="Crawler Robot"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="scale-150" // Zoom in slightly to remove edges
                        ></iframe>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
