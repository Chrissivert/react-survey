import { useState, useEffect } from "react";
import "../fun.css"


export default function MusicButtons({ onChange }) {
  const [musicEnabled, setMusicEnabled] = useState(false);
   const [noPosition, setNoPosition] = useState({ top: 40, left: 70 });


  const moveNoButton = () => {
    // Randomly pick a position within some bounds
    const top = Math.floor(Math.random() * 50); // percentage
    const left = Math.floor(Math.random() * 70); // percentage
    setNoPosition({ top, left });
  };

  useEffect(() => {
    const audio = new Audio("/audio/britishMusic.MP3");
    audio.loop = true;

    if (musicEnabled) {
      audio.play().catch(() => {
        console.log("User must interact first to play music");
      });
    } else {
      audio.pause();
    }

    return () => audio.pause(); 
  }, [musicEnabled]);


  const handleClick = (enabled) => {
    setMusicEnabled(enabled);
    if (onChange) onChange(enabled);
  };

  return (
  <div className="music-toggle">
    <h3>Background music?</h3>
    <button
      className={`yes-button ${musicEnabled ? "active" : ""}`}
      onClick={() => handleClick(true)}
    >
      Yes
    </button>
    <button
        className={`no-button ${!musicEnabled ? "active" : ""}`}
        onMouseEnter={moveNoButton}
        onClick={() => handleClick(false)}
        style={{ position: "absolute", top: `${noPosition.top}%`, left: `${noPosition.left}%` }}
      >
        No
      </button>
  </div>
);
}
