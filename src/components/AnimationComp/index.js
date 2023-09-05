import { motion } from "framer-motion";
function AnimationComp({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationComp;

// Animation
const animations = {
  initial: { opacity: 0.5, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0.5, y: 10 },
};
