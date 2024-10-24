// AnimatedBackground.js
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Add your animated background here, like moving particles, waves, etc. */}
      <div className="w-full h-full bg-gradient-to-r from-blue-800 to-purple-900 animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;
