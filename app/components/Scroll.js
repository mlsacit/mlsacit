// components/Scroll.js
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const Scroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        multiplier: 1.5, // Adjusts the scroll speed
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default Scroll;


// // components/Scroll.js
// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';

// const Scroll = ({ children }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (typeof window === 'undefined' || !scrollRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       smartphone: {
//         smooth: false, // Disable smooth scroll on mobile
//         breakpoint: 768
//       },
//       tablet: {
//         smooth: false, // Disable smooth scroll on tablets
//         breakpoint: 1024
//       },
//       lerp: 0.1, // Lower values = smoother but slower
//       multiplier: 1.2, // Reduced scroll speed
//       firefoxMultiplier: 50, // Better Firefox performance
//       touchMultiplier: 1.5, // Smoother touch scrolling
//       getDirection: true,
//       getSpeed: true,
//       resetNativeScroll: true,
//       repeat: true,
//       inertia: 0.8, // Smoother momentum
//       class: 'is-inview',
//       offset: ['15%', 0],
//       direction: 'vertical'
//     });

//     // Add RAF for better performance
//     let rafId;
//     const update = (time) => {
//       scroll.update();
//       rafId = requestAnimationFrame(update);
//     };
//     rafId = requestAnimationFrame(update);

//     // Handle resize
//     const resizeObserver = new ResizeObserver(() => scroll.update());
//     resizeObserver.observe(scrollRef.current);

//     return () => {
//       cancelAnimationFrame(rafId);
//       scroll.destroy();
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} data-scroll-container style={{
//       perspective: '1px', // Force hardware acceleration
//       transformStyle: 'preserve-3d'
//     }}>
//       {children}
//     </div>
//   );
// };

// export default Scroll;