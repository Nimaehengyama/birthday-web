import React, { useEffect, useRef, useState } from 'react';
import './Letter.css';

export default function Letter({ onNext }) {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);

  const fullText = `
ถึงที่รักของฉัน 💖

ขอบคุณที่อยู่เคียงข้างกันในทุกวัน ไม่ว่าจะยิ้มหรือร้องไห้ 
ทุกช่วงเวลามีค่าเพราะมีเธออยู่ฉันอาจไม่เก่งเรื่องคำพูด 
แต่ทุกอย่างที่ทำมาจากหัวใจจริง ๆ นะ

สุขสันต์วันเกิดนะคะ ขอให้ปีนี้เป็นปีที่อบอุ่น 
เต็มไปด้วยเสียงหัวเราะ และความสุขในทุก ๆ วัน

รักที่สุดในโลก 💗
`;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Setup Audio once
  useEffect(() => {
    const audio = new Audio('/assets/music/lost-jicksaw.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.play().catch((err) => {
      console.warn('Autoplay blocked:', err.message);
    });

    return () => {
      audio.pause();
    };
  }, []);

  // Toggle audio
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  // แปลง \n เป็น <br />
  const formattedText = text.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="letter-container">
      <h2 className="letter-title">💌 A Message From Me to You</h2>

      <div className="letter-box">
        <div className="letter-text">{formattedText}</div>
      </div>

      <div className="letter-controls">
        <button className="letter-audio-toggle" onClick={toggleAudio}>
          {playing ? '🔇 ปิดเสียง' : '🔊 เปิดเสียง'}
        </button>

        <button className="letter-button" onClick={onNext}>
          Next ➡️
        </button>
      </div>
    </div>
  );
}
