"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export function NumberTicker({ value, prefix = "", suffix = "", className, decimals = 0 }: NumberTickerProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(value);
      return;
    }

    if (!numberRef.current) return;

    const obj = { val: 0 };
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: numberRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: value,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setDisplayValue(obj.val);
            },
          });
        },
      });
    }, numberRef);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={numberRef} className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}
