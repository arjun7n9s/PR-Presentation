import React from 'react';
import { motion } from 'framer-motion';
import { Target, Wifi, Database, Grid, Battery, FileText } from 'lucide-react';

const ObjectiveCard = ({ icon: Icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        className="bg-surface border border-white/5 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors cursor-default"
    >
        <div className="p-3 bg-primary/10 rounded-full text-primary">
            <Icon size={24} />
        </div>
        <h3 className="font-display font-bold text-lg text-white">{title}</h3>
        <p className="text-sm text-neutral-400">{desc}</p>
    </motion.div>
);

const objectives = [
    { icon: Grid, title: "Automated Navigation", desc: "Grid-based scanning of metal plates" },
    { icon: Wifi, title: "Wireless Data", desc: "MQTT transmission over Wi-Fi" },
    { icon: Database, title: "Cloud Storage", desc: "Real-time logging to Firebase" },
    { icon: Target, title: "Precision", desc: "X,Y mapped thickness readings" },
    { icon: Battery, title: "Portable Power", desc: "Battery operated for >1hr runtime" },
    { icon: FileText, title: "Structured Output", desc: "Auto-generated excel/heatmaps" },
];

export default function ObjectivesSlide() {
    return (
        <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto w-full">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-5xl font-display font-bold text-white mb-4">System <span className="text-secondary">Objectives</span></h2>
                <p className="text-neutral-400">Design goals for the autonomous inspection unit</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
                {objectives.map((obj, i) => (
                    <ObjectiveCard key={i} {...obj} index={i} />
                ))}
            </div>
        </div>
    );
}
