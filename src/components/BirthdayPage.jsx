// src/components/BirthdayPage.jsx
import React, { useEffect } from 'react';
import './BirthdayPage.css';

export default function BirthdayPage() {
  useEffect(() => {
    const heartInterval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 300);

    const confettiInterval = setInterval(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }, 150);

    return () => {
      clearInterval(heartInterval);
      clearInterval(confettiInterval);
    };
  }, []);

  return (
    <div className="birthday-container">
      <h1 className="birthday-title">🎂 Happy Birthday, My Love 🎂</h1>
      <p className="birthday-message">
        ขอบคุณที่อยู่เคียงข้างกันในทุกวัน ขอให้ทุกปีเต็มไปด้วยเสียงหัวเราะ ความรัก และความอบอุ่น 💗
      </p>
      <button className="birthday-button" onClick={() => window.location.reload()}>
        จบเซอร์ไพรส์ 🎉
      </button>
    </div>
  );
}
