import { useState, useRef, useEffect } from 'react';
import './bioSection.css';

const BioSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIndex(entry.target.dataset.index);
        }
      });
    }, { threshold: 0.5 });

    paragraphRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      paragraphRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bio-section" id="sectionZero">
      <p
        className={`bio-section-paragraph ${activeIndex == 0 ? 'active' : ''}`}
        ref={(el) => (paragraphRefs.current[0] = el)}
        data-index={0}
      >
        Born in New Zealand (நியூசிலாந்து).
      </p>
      <p
        className={`bio-section-paragraph ${activeIndex == 1 ? 'active' : ''}`}
        ref={(el) => (paragraphRefs.current[1] = el)}
        data-index={1}
      >
        Started learning Software Development in 2013, by learning Visual Basic
      </p>
      <p
        className={`bio-section-paragraph ${activeIndex == 2 ? 'active' : ''}`}
        ref={(el) => (paragraphRefs.current[2] = el)}
        data-index={2}
      >
        Know I have knowledge of 11 languages
      </p>
      <p
        className={`bio-section-paragraph ${activeIndex == 3 ? 'active' : ''}`}
        ref={(el) => (paragraphRefs.current[3] = el)}
        data-index={3}
        style={{marginBottom: 0}}
      >
        and have developed a knack for bencmarking, optimization, and design...
      </p>
    </div>
  );
};

export default BioSection;