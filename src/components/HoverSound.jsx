import React, { useState, useCallback } from 'react';

const HoverSound = ({ children, soundUrl = '/api/placeholder/audio', volume = 0.2 }) => {
  const [audio] = useState(new Audio(soundUrl));
  
  const playSound = useCallback(() => {
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [audio, volume]);

  return (
    <div 
      onMouseEnter={playSound}
      className="hover-sound-wrapper"
    >
      {children}
    </div>
  );
};

export default HoverSound;