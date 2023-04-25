import React, { useEffect, useState } from 'react';
import './ScrollingLine.css';

const ScrollingLine = () => {
  const [drawLength, setDrawLength] = useState(0);

  useEffect(() => {
    const path = document.getElementById('scrolling-line');
    const pathLength = path.getTotalLength();

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const newDrawLength = (scrollPosition / window.innerHeight) * pathLength;
      setDrawLength(newDrawLength);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <svg height="100%" width="100%" className="scrolling-line-svg">
      <path
        d="M0,0 C300,300 500,200 1000,0 L1000,100 L0,100 Z"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeDasharray="2000"
        strokeDashoffset={2000 - drawLength}
        id="scrolling-line"
      />
    </svg>
  );
};

export default ScrollingLine;