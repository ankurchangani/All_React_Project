import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ loading }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (loading) {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        { width: '100%', duration: 1.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(barRef.current, { width: '0%', duration: 0.3, ease: 'power2.out' });
    }
  }, [loading]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', zIndex: 1000 }}>
      <div ref={barRef} style={{ height: '100%', backgroundColor: '#1f2937', width: '0%' }}></div>
    </div>
  );
};

export default Loader;
