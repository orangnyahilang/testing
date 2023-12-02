import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children, direction, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : direction === "up"
      ? "translateY(-20px)"
      : direction === "down"
      ? "translateY(20px)"
      : direction === "left"
      ? "translateX(-20px)"
      : direction === "right"
      ? "translateX(20px)"
      : "translateY(-20px)", // Default: atas
    config: { duration: duration || 800 },
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

export default AnimatedComponent;
