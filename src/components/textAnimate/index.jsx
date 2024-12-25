import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import "./styles.scss";

const TextAnimate = ({ customClassName = "", children, isTitle = false, isFadeIn = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const animateClassName = isTitle ? "title" : isFadeIn ? "fade-in" : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      throttle(
        (entries) => {
          entries.forEach((entry) => setIsVisible(entry.isIntersecting));
        },
        200
      ),
      {
        threshold: 0.1,
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`animate-${animateClassName} ${customClassName} ${isVisible ? `animate-${animateClassName}-active` : ""}`}
      ref={domRef}
      data-content={children}
    >
      <div className="animate-content h-auto">{children}</div>
    </div>
  );
};

TextAnimate.propTypes = {
  customClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  isTitle: PropTypes.bool,
  isFadeIn: PropTypes.bool,
};

export default TextAnimate;