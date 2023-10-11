import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
function AnimationComp({ children }) {
  const location = useLocation();
  console.log(location)
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      {children}
    </motion.div>
  );
}

export default AnimationComp;

// Animation
const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0.5 },
  transition: { duration: 3, ease: "easeOut" },
};

AnimationComp.propTypes = {
  children: PropTypes.node,
};
