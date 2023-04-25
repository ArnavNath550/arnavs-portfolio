import { useEffect, useRef } from 'react';
import './FadeUp.css';


const FadeUp = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const onIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('fade-up-show');
          }
        });
      };
      const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [ref]);

  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  );
}

export default FadeUp;