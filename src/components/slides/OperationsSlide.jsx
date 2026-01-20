import React from 'react';
import { motion } from 'framer-motion';
import { Play, Navigation, Camera, Wifi, StopCircle, RotateCw } from 'lucide-react';

const Step = ({ icon: Icon, title, index }) => (
    <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-surface border-2 border-secondary/50 flex items-center justify-center z-10 relative">
            <Icon className="text-secondary" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping opacity-20" />
        </div>
        <div className="mt-4 text-center">
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <span className="text-xs font-mono text-neutral-500">STEP {index + 1}</span>
        </div>
    </div>
);

const Connector = () => (
    <div className="h-1 bg-neutral-800 w-16 md:w-24 -mt-12 self-start md:self-auto md:mt-0" />
);

export default function OperationsSlide() {
    const steps = [
        { icon: Play, title: "Initialize" },
        { icon: Navigation, title: "Navigate Grid" },
        { icon: StopCircle, title: "Stop & Stabilize" },
        { icon: Camera, title: "Capture & Decode" },
        { icon: Wifi, title: "Publish Data" },
        { icon: RotateCw, title: "Repeat" },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-white mb-16">Runtime <span className="text-secondary">Sequence</span></h2>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-0 w-full px-8">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <Step {...step} index={i} />
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                                className="hidden md:block h-1 bg-gradient-to-r from-secondary/50 to-secondary/20 flex-1 mx-2"
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="mt-20 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl text-center">
                <p className="text-neutral-300 italic">
                    "The system operates autonomously, requiring no human intervention once the grid scan is initiated. Real-time feedback appears instantly on the cloud dashboard."
                </p>
            </div>

        </div>
    );
}
