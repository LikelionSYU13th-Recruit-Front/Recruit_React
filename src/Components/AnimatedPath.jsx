import { motion } from "framer-motion";
import penIcon from '../images/penIcon.png';
import "./AnimatedPath.css";

function AnimatedPath() {
  return (
    <div className="animated-path-container">
      <svg
        width="1760"
        height="870"
        viewBox="0 0 1770 830"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="
            M -1 240 
            C 200 450, 850 800, 790 450 
            C 680 0, 400 20, 550 380 
            C 750 900, 1330 730, 1640 280 
            C 1950 -160, 1430 -270, 1290 130
            C 1150 530, 1440 800, 1730 600
          "
          stroke="#0071C8"
          strokeWidth="4"
          fill="none"
          strokeDasharray="5000"
          strokeDashoffset="5000"
          initial={{ strokeDashoffset: 5000 }}
          animate={{
            strokeDashoffset: [5000, 4770, 1917, 0],
          }}
          transition={{
            times: [0, 0.3, 0.4, 0.6, 0.7, 1],
            duration: 5,
            ease: "easeInOut",
          }}
        />
        
        <motion.circle 
          cx="200" 
          cy="400" 
          r="14" 
          fill="#0071C8" 
          stroke="#ffffff" 
          strokeWidth="5" 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ times: [0, 0.59, 0.6, 0.69, 0.7, 1], duration: 5 }}
        />
        <motion.circle 
          cx="1625" 
          cy="300" 
          r="14" 
          fill="#0071C8" 
          stroke="#ffffff" 
          strokeWidth="5" 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 1, 1] }}
          transition={{ times: [0, 0.59, 0.6, 0.69, 0.7, 1], duration: 5 }}
        />
        <motion.circle 
          cx="1730" 
          cy="600" 
          r="14" 
          fill="#ffffff" 
          stroke="#0071C8" 
          strokeWidth="5" 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 0 , 1, 1, 1] }}
          transition={{ times: [0, 0.59, 0.6, 0.69, 0.7, 0.8, 0.9, 1], duration: 8.5 }}
        />
      </svg>
    </div>
  );
}

export default AnimatedPath;