// src/components/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';

// รูปจากใน src/assets/images/
import pic1 from '../assets/images/10.jpg';
import pic2 from '../assets/images/11.jpg';
import pic3 from '../assets/images/15.jpg';

const images = [pic1, pic2, pic3];

export default function Gallery({ onNext }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // slide ซ้ายขวา

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) =>
      newDirection === 1
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">📸 Memories Gallery</h2>
      <div className="gallery-slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Memory ${current + 1}`}
            className="gallery-image"
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <div className="gallery-controls">
        <button onClick={() => paginate(-1)} className="gallery-btn">◀️ Previous</button>
        <button onClick={() => paginate(1)} className="gallery-btn">Next ▶️</button>
      </div>
      <button className="gallery-next" onClick={onNext}>Next ➡️</button>
    </div>
  );
}
