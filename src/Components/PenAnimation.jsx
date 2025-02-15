import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import penIcon from '../images/penIcon.png';
import "./PenAnimation.css";

function PenAnimation() {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);  // 경로 진행 상태

  // Calculate path length
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Animate the path and the pen icon synchronously
  useEffect(() => {
    if (pathLength) {
      let animationFrameId;

      const animate = (timestamp) => {
        // Set progress based on timestamp
        const newProgress = (timestamp / 5000) * 100; // Adjust according to the duration

        // Sync the progress with the path and pen icon
        setProgress(newProgress);

        // Keep animating if progress is less than 100
        if (newProgress < 100) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      // Start the animation loop
      animationFrameId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [pathLength]);

  const path = `
    M -351 240 
    C 200 450, 850 800, 790 450 
    C 680 0, 400 20, 550 380 
    C 750 900, 1330 730, 1640 280 
    C 1950 -160, 1430 -270, 1290 130
    C 1150 530, 1440 800, 1730 600
  `;

  return (
    <div className="pen-animated-path-container">
      <svg
        width="1760"
        height="870"
        viewBox="0 0 1770 830"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the path */}
        <motion.path
          ref={pathRef}
          d={path}
          fill="transparent"
          stroke="none"
          strokeDasharray={pathLength}
          strokeDashoffset={(1 - progress / 100) * pathLength} // Update dashoffset based on progress
          initial={{ strokeDashoffset: pathLength }}
          animate={{
            strokeDashoffset: 0, // Animate the stroke to 0
          }}
          transition={{
            duration: 5, // Match the speed of path animation
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Image follows path */}
      <motion.img
        src={penIcon}
        alt="Pen Icon"
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          transformOrigin: "center",
          top: pathRef.current ? pathRef.current.getPointAtLength((progress / 100) * pathLength).y : 240, // Use progress to move the pen icon
          left: pathRef.current ? pathRef.current.getPointAtLength((progress / 100) * pathLength).x : -1,
        }}
      />
    </div>
  );
}

export default PenAnimation;
