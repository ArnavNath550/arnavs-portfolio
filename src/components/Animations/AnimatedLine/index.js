import React, { useEffect, useRef } from 'react';
import './AnimatedSVG.css';

const AnimatedLine = () => {
  const svgRef = useRef(null);

  return (
    <div className="scrolling-svg">
      
<svg width="1500" height="2017" viewBox="0 0 1500 2017" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74.5 1C88.1667 122.5 180.2 365.5 439 365.5C762.5 365.5 604 788 861.5 788C1067.5 788 1365.33 906.667 1488.5 966C1622.83 1042.17 1891.5 1229.4 1891.5 1369C1891.5 1543.5 1454.5 1066 1151.5 1369C848.5 1672 834 2216.5 569 1951.5C357 1739.5 101.667 1908.5 0.5 2019.5" stroke="black"/>
</svg>

      <div className="trigger"></div>
    </div>
  );
};

export default AnimatedLine;