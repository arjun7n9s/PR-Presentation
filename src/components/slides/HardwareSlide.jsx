import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importing images (assuming they are in assets root)
import esp32Img from '../../assets/ESP32.png';
import camImg from '../../assets/ESP32-CAM.jpg';
import motorImg from '../../assets/ENCODER MOTOR.jpg';
import driverImg from '../../assets/Double-BTS7960-43A-H-Bridge-High-Power-Stepper-Motor-Driver-5.jpg';
import imuImg from '../../assets/IMU.jpg';
import tofImg from '../../assets/vl53l0x.png';

const components = [
    {
        id: 'brain',
        title: 'ESP32 Controller',
        role: 'Central Processing Unit',
        specs: ['Dual Core 240MHz', 'Built-in Wi-Fi/Bluetooth', 'Real-time OS FreeRTOS', 'High Precision PWM'],
        desc: 'Handles all motor coordination, sensor fusion, and MQTT communication. Chosen for its low power consumption and high reliability.',
        img: esp32Img
    },
    {
        id: 'vision',
        title: 'ESP32-CAM',
        role: 'Digitization Module',
        specs: ['2MP OV2640 Sensor', 'Built-in Flash', 'Compact Form Factor'],
        desc: 'Captures the 7-segment display of the UT gauge. Runs a custom lightweight algorithm to extract thickness values without heavy OCR.',
        img: camImg
    },
    {
        id: 'motion',
        title: 'Encoder Motors',
        role: 'Precision Locomotion',
        specs: ['High Torque DC', 'Quadrature Encoders', 'Closed-loop Control'],
        desc: 'Provides typically 300-500 ticks per revolution, allowing for precise grid navigation and odometry calculation (X, Y tracking).',
        img: motorImg
    },
    {
        id: 'power',
        title: 'BTS7960 Driver',
        role: 'High Power Drive',
        specs: ['43A Peak Current', 'Thermal Protection', 'H-Bridge Configuration'],
        desc: 'Ensures stable power delivery to motors even under load (e.g., when the probe contacts the surface), preventing brownouts.',
        img: driverImg
    },
    {
        id: 'imu',
        title: 'MPU6050 IMU',
        role: 'Heading Correction',
        specs: ['3-Axis Gyroscope', '3-Axis Accelerometer', 'Digital Motion Processor'],
        desc: 'Corrects drift during straight-line grid scanning. Magnetometer is avoided due to interference from steel surfaces.',
        img: imuImg
    },
    {
        id: 'tof',
        title: 'VL53L0X ToF',
        role: 'Edge Safety Sensor',
        specs: ['Laser Ranging', 'Millimeter Precision', 'Fast Response (<30ms)'],
        desc: 'Measures distance to the surface below specifically to detect plate edges. Prevents the robot from falling off the structure.',
        img: tofImg
    }
];

export default function HardwareSlide() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col h-full w-full max-w-6xl mx-auto items-center">
            <h2 className="text-4xl font-display font-bold text-white mb-8 mt-4">Hardware <span className="text-accent">Integration</span></h2>

            <div className="flex flex-col md:flex-row w-full h-[600px] gap-8">

                {/* Navigation List */}
                <div className="w-full md:w-1/3 flex flex-col gap-2 overflow-y-auto pr-2">
                    {components.map((comp, index) => (
                        <button
                            key={comp.id}
                            onClick={() => setActiveTab(index)}
                            className={`text-left p-4 rounded-xl border transition-all ${activeTab === index
                                ? 'bg-white/10 border-accent text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                                : 'bg-transparent border-transparent text-neutral-500 hover:bg-white/5 hover:text-neutral-300'
                                }`}
                        >
                            <h3 className="font-bold text-lg">{comp.title}</h3>
                            <p className="text-xs font-mono opacity-70">{comp.role}</p>
                        </button>
                    ))}
                </div>

                {/* content Area */}
                <div className="flex-1 bg-surface/50 rounded-2xl border border-white/5 p-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center h-full w-full"
                        >
                            <div className="relative w-full h-64 mb-6 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 p-4">
                                <img
                                    src={components[activeTab].img}
                                    alt={components[activeTab].title}
                                    className="max-h-full max-w-full object-contain drop-shadow-2xl"
                                />
                            </div>

                            <h3 className="text-3xl font-display font-bold text-white mb-2">{components[activeTab].title}</h3>
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                {components[activeTab].specs.map((spec, i) => (
                                    <span key={i} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20 font-mono">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                            <p className="text-neutral-300 max-w-lg leading-relaxed">
                                {components[activeTab].desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
