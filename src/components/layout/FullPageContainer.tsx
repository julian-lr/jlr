import React, { useRef, useEffect } from 'react';
import Home from '../../pages/Home/Home';
import AboutMe from '../../pages/AboutMe/AboutMe';
import Gallery from '../../pages/Gallery/Gallery';
import WorkExperience from '../../pages/WorkExperience/WorkExperience';
import Education from '../../pages/Education/Education';
import Courses from '../../pages/Courses/Courses';
import Contact from '../../pages/Contact/Contact';
import styles from './FullPageContainer.module.scss';

// Maps section IDs to their corresponding components
const sectionComponents: Record<string, React.ReactNode> = {
  home: <Home key="home" />,
  aboutme: <AboutMe key="aboutme" />,
  workexperience: <WorkExperience key="workexperience" />,
  gallery: <Gallery key="gallery" />,
  education: <Education key="education" />,
  courses: <Courses key="courses" />,
  contact: <Contact key="contact" />,
};

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

interface FullPageContainerProps {
  current: number;
  setCurrent: (idx: number) => void;
  sections: { id: string; name: string }[];
}

const FullPageContainer: React.FC<FullPageContainerProps> = ({ current, setCurrent, sections }) => {
  const isTransitioning = useRef(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handles mouse wheel and scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;
      const section = sectionRefs.current[current];
      if (!section) return;
      const atTop = section.scrollTop === 0;
      const atBottom = section.scrollHeight - section.scrollTop === section.clientHeight;
      if (e.deltaY > 0 && atBottom && current < sections.length - 1) {
        isTransitioning.current = true;
        setCurrent(clamp(current + 1, 0, sections.length - 1));
        e.preventDefault();
      } else if (e.deltaY < 0 && atTop && current > 0) {
        isTransitioning.current = true;
        setCurrent(clamp(current - 1, 0, sections.length - 1));
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [current, setCurrent, sections.length]);

  // Handles touch events for mobile navigation
  useEffect(() => {
    let startY = 0;
    let endY = 0;
    let startScroll = 0;
    let isSwiping = false;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startY = e.touches[0].clientY;
      const section = sectionRefs.current[current];
      startScroll = section ? section.scrollTop : 0;
      isSwiping = true;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      const section = sectionRefs.current[current];
      if (!section) return;
      const atTop = section.scrollTop === 0;
      if (atTop && e.touches[0].clientY - startY > 10) {
        e.preventDefault();
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;
      endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY;
      const section = sectionRefs.current[current];
      if (!section || isTransitioning.current) return;
      const atTop = section.scrollTop === 0;
      const atBottom = section.scrollHeight - section.scrollTop === section.clientHeight;
      if (deltaY > 40 && atTop && startScroll === 0 && current > 0) {
        isTransitioning.current = true;
        setCurrent(clamp(current - 1, 0, sections.length - 1));
      } else if (deltaY < -40 && atBottom && current < sections.length - 1) {
        isTransitioning.current = true;
        setCurrent(clamp(current + 1, 0, sections.length - 1));
      }
      isSwiping = false;
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, setCurrent, sections.length]);

  // Handles keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isTransitioning.current) return;
      const section = sectionRefs.current[current];
      if (!section) return;
      const atTop = section.scrollTop === 0;
      const atBottom = section.scrollHeight - section.scrollTop === section.clientHeight;
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && atBottom && current < sections.length - 1) {
        isTransitioning.current = true;
        setCurrent(clamp(current + 1, 0, sections.length - 1));
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && atTop && current > 0) {
        isTransitioning.current = true;
        setCurrent(clamp(current - 1, 0, sections.length - 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, setCurrent, sections.length]);

  // Prevents rapid transitions by enforcing a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      isTransitioning.current = false;
    }, 700); // matches CSS transition duration
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className={styles.fullPageContainer}>
      <div
        className={styles.fullPageWrapper}
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        {sections.map((section, idx) => (
          <div
            className={styles.section}
            key={section.id}
            id={section.id}
            ref={el => { sectionRefs.current[idx] = el; }}
          >
            {sectionComponents[section.id]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullPageContainer;
