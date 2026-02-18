import { useEffect, useState, useRef } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of element is visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasCounted]);

  useEffect(() => {
    if (!hasCounted) return;

    let current = 0;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasCounted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default CountUp;
