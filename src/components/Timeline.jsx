import React from 'react';
import './Timeline.css';

export default function Timeline({ onNext }) {
  const videos = [
    { src: "/birthday-web/assets/videos/1.mp4", className: "frame1" },
    { src: "/birthday-web/assets/videos/2.mp4", className: "frame2" },
    { src: "/birthday-web/assets/videos/3.mp4", className: "frame3" },
    { src: "/birthday-web/assets/videos/4.mp4", className: "frame4" },
    { src: "/birthday-web/assets/videos/5.mp4", className: "frame5" },
    { src: "/birthday-web/assets/videos/6.mp4", className: "frame6" },
    { src: "/birthday-web/assets/videos/7.mp4", className: "frame7" },
    { src: "/birthday-web/assets/videos/10.mp4", className: "frame10" }
  ];

  return (
    <div className="wall-wrapper">
      <h2 className="wall-title">🖼 ความทรงจำของเรา</h2>

      <div className="wall-layout">
        {videos.map((v, i) => (
          <div className={`video-box ${v.className}`} key={i}>
            <video
              src="/birthday-web/assets/videos/1.mp4"
              controls
              muted
              autoPlay
              playsInline
              loop
            />
          </div>
        ))}
      </div>


      <div className="message-box">
        <p>“เหมือนเราติดทุกความทรงจำไว้บนผนังหัวใจ ขอบคุณที่อยู่ด้วยกันเสมอ 💖”</p>
      </div>

      <div className="timeline-next">
        <button className="next-btn" onClick={onNext}>➡️ ไปกันต่อออ</button>
      </div>
    </div>
  );
}
