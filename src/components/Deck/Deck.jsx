import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import HeroSlide from '../slides/HeroSlide';
import ProblemSlide from '../slides/ProblemSlide';
import CoreIdeaSlide from '../slides/CoreIdeaSlide';
import ObjectivesSlide from '../slides/ObjectivesSlide';
import ArchitectureSlide from '../slides/ArchitectureSlide';
import HardwareSlide from '../slides/HardwareSlide';
import OperationsSlide from '../slides/OperationsSlide';
import ProgressSlide from '../slides/ProgressSlide';
import FutureSlide from '../slides/FutureSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder slides for now
const ComingSoonSlide = ({ title }) => (
    <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-display font-bold text-neutral-700">{title}</h2>
    </div>
);

const slides = [
    HeroSlide,
    ProblemSlide,
    CoreIdeaSlide,
    ObjectivesSlide,
    ArchitectureSlide,
    HardwareSlide,
    OperationsSlide,
    ProgressSlide,
    FutureSlide,
];

export default function Deck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(c => c + 1);
        }
    };

    const prev = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(c => c - 1);
        }
    };

    useKeyboardNav(next, prev);

    const SlideComponent = slides[currentSlide];

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-background text-white selection:bg-primary/30">

            {/* Slide Content */}
            <AnimatePresence mode='popLayout' initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center h-full w-full p-8 md:p-16"
                >
                    <SlideComponent onNext={next} />
                </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-surface z-50">
                <motion.div
                    className="h-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-6 z-50 pointer-events-auto">
                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        disabled={currentSlide === 0}
                        className="p-3 rounded-full bg-surface/50 border border-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        disabled={currentSlide === slides.length - 1}
                        className="p-3 rounded-full bg-surface/50 border border-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                <div className="font-mono text-xs text-neutral-500 tracking-widest">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </div>
            </div>

            {/* CRT Scanline Effect (Optional) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </div>
    );
}
