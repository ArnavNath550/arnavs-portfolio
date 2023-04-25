import { useState, useEffect } from 'react';
import './SquigglyLine.css';

const SquigglyLine = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const pathLength = document.querySelector('.squiggly-line path').getTotalLength();
    const animation = () => {
      if (offset < pathLength) {
        setOffset((prevOffset) => prevOffset + 1);
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  }, []);

  return (
    <svg viewBox="0 0 300 300" className="squiggly-line">
      <path
        d="M30,150 Q90,80 150,150 T270,150"
        stroke="#000"
        strokeWidth="6"
        fill="none"
        strokeDasharray="7 7"
        strokeDashoffset={offset}
      />
    </svg>
  );
}

export default SquigglyLine;