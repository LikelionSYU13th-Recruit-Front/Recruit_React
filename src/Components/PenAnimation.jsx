import { motion } from "framer-motion";
import penIcon from '../images/penIcon.png';
import "./PenAnimation.css";

function PenAnimation() {
  const path = `
    M -1 240 
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
        {/* 보이지 않는 경로 */}
        <motion.path
          d={path}
          stroke="transparent" // 경로 숨기기
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />

        {/* penIcon을 경로를 따라 이동 */}
        <motion.foreignObject width="50" height="50">
          <motion.img
            src={penIcon}
            alt="Pen Icon"
            width="40"
            height="40"
            style={{ transformOrigin: "center" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />
        </motion.foreignObject>
      </svg>
    </div>
  );
}

export default PenAnimation;
