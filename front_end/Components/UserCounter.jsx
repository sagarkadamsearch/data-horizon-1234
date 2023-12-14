import React, { useEffect, useState, useRef } from "react";
import "./userCounter.css";

const UserCounter = ({ totalCount, name }) => {
  const [count, setCount] = useState(0);
  const animationStarted = useRef(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    let startTime = null;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      console.log("Hello");

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const currentCount = Math.floor(progress * totalCount);

        setCount(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        // Animation complete
        setCount(totalCount);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTime = Date.now();
          updateCounter();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, [totalCount]);

  return (
    <div ref={counterRef} className="counter-container">
      <div className="counter">{count}</div>
      <p className="counter-label">{name}</p>
    </div>
  );
};

export default UserCounter;
