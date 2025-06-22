// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="landing-title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        💖 Happy Birthday My Love 💖
      </motion.h1>
      <motion.p
        className="landing-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        คลิกด้านล่างเพื่อเริ่มต้นการเดินทางสุดเซอร์ไพรส์ของคุณ
      </motion.p>
      <motion.button
        className="landing-button"
        onClick={onStart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        เริ่มการเซอร์ไพรส์ 🎉
      </motion.button>
    </motion.div>
  );
}
