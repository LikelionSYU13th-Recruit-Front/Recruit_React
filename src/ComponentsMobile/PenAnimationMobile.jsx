import React from 'react';
import penIcon from '../images/penIcon.png';
import { motion } from 'framer-motion';
import './PenAnimationMobile.css';

function PenAnimationMobile() {
  return (
    <div className="PenAnimationMobile-container">
      <svg
        width="390"
        height="600"
        viewBox="0 0 390 552"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="
          M -30,430  
          C 220, 350 450,80 250, -24
          C 250, -30 10, -30 50, 270
          C 50, 270 110, 620 340, 520
          "

          stroke="#0071C8"
          strokeWidth="4"
          fill="none"
          strokeDasharray="3000"
          strokeDashoffset="3000"
          initial={{ strokeDashoffset: 3000 }}
          animate={{
            strokeDashoffset: [3000, 2720, 1200],
          }}
          transition={{
            times: [0, 0.3, 0.4, 0.6, 0.7, 1],
            duration: 5,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="340"
          cy="520"
          r="6.5"
          fill="#ffffff"
          stroke="#0071C8"
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1, 1] }}
          transition={{ times: [0, 0.59, 0.6, 0.69, 0.7, 1], duration: 8 }}
        />
        <motion.circle
          cx="170"
          cy="323"
          r="6.5"
          fill="#0071C8"
          stroke="#ffffff"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ times: [0, 0.59, 0.6, 0.69, 0.7, 1], duration: 5 }}
        />
      </svg>
    </div>
  );
};

export default PenAnimationMobile;
