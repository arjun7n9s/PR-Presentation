import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Camera, Send, Database, Server, Smartphone } from 'lucide-react';

const Node = ({ icon: Icon, label, details, x, y, active, onClick }) => (
    <motion.div
        className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 ${active ? 'grayscale-0' : 'grayscale opacity-70'} hover:grayscale-0 hover:opacity-100 transition-all`}
        style={{ left: x, top: y }}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
    >
        <div className={`p-4 rounded-xl border-2 ${active ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(6,182,212,0.5)]' : 'bg-surface border-neutral-700'}`}>
            <Icon size={24} className={active ? 'text-primary' : 'text-neutral-500'} />
        </div>
        <span className={`font-mono text-sm font-bold ${active ? 'text-primary' : 'text-neutral-500'}`}>{label}</span>

        {active && (
            <motion.div
                className="absolute top-full mt-4 w-64 bg-black/90 border border-white/10 p-4 rounded-lg z-50 backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="text-xs text-neutral-300 leading-relaxed">{details}</p>
            </motion.div>
        )}
    </motion.div>
);

const Connection = ({ start, end }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible">
        <motion.path
            d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5,5"
        />
        <motion.circle r="3" fill="#06b6d4">
            <animateMotion dur="2s" repeatCount="indefinite" path={`M ${start.x} ${start.y} L ${end.x} ${end.y}`} />
        </motion.circle>
    </svg>
);

export default function ArchitectureSlide() {
    const [activeNode, setActiveNode] = useState(null);

    const nodes = [
        { id: 'gauge', label: 'UT GAUGE', icon: Server, x: '20%', y: '20%', details: "Existing ultrasonic thickness gauge. Displays values on 7-segment screen." },
        { id: 'cam', label: 'ESP32-CAM', icon: Camera, x: '20%', y: '50%', details: "Captures gauge display, parses digits (No OCR/ML), sends numeric value." },
        { id: 'esp32', label: 'ESP32 MAIN', icon: Cpu, x: '50%', y: '50%', details: "Central Brain. Handles Locomotion, Odometry (X,Y), and Data Fusion." },
        { id: 'broker', label: 'MQTT CLOUD', icon: Send, x: '80%', y: '40%', details: "HiveMQ / AWS IoT. Real-time message exchange." },
        { id: 'laptop', label: 'DASHBOARD', icon: Smartphone, x: '80%', y: '70%', details: "Python/React Listener. Visualizes heatmap and logs to Excel." },
    ];

    // Store coordinates as numbers for SVG lines (assuming 1000x600 canvas for relative calcs)
    // Converting % to approx relative units for a simple demo
    // In a real app, use ref to get exact coordinates
    // For this demo, using hardcoded SVG paths based on the % composition

    return (
        <div className="flex flex-col items-center h-full w-full">
            <h2 className="text-4xl font-display font-bold text-white mb-8 mt-4">System <span className="text-primary">Architecture</span></h2>
            <p className="text-neutral-500 mb-8">Click nodes to investigate data flow</p>

            <div className="relative w-full max-w-5xl h-[500px] bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden" onClick={() => setActiveNode(null)}>

                {/* Connections (Visual approximation) */}
                {/* Gauge -> Cam */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Lines would be drawn here. For simplicity in this text-based creation, using absolute divs for lines */}
                    <div className="absolute left-[20%] top-[20%] w-[2px] h-[30%] bg-neutral-800" /> {/* Vertical */}
                    <div className="absolute left-[20%] top-[50%] w-[30%] h-[2px] bg-neutral-800" /> {/* Horizontal to Center */}
                    <div className="absolute left-[50%] top-[50%] w-[30%] h-[2px] bg-neutral-800 origin-left -rotate-12" /> {/* Center to Cloud */}
                    <div className="absolute left-[80%] top-[40%] w-[2px] h-[30%] bg-neutral-800" /> {/* Cloud to Laptop */}
                </div>

                {nodes.map((node) => (
                    <Node
                        key={node.id}
                        {...node}
                        active={activeNode === node.id}
                        onClick={(e) => { e.stopPropagation(); setActiveNode(node.id); }}
                    />
                ))}

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#06b6d4]"
                        animate={{
                            left: ["20%", "20%", "50%", "80%", "80%"],
                            top: ["20%", "50%", "50%", "40%", "70%"],
                            opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

            </div>
        </div>
    );
}
