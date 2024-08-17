// src/ComingSoon.js
import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="snowfall">
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        {/* Add more snowflakes if desired */}
      </div>
      <div className="title">Coming Soon</div>

      <div className="description">Oops! Still Under Construction - Check Back Soon! - Santosh Dannana</div>
      <div className="animation">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
