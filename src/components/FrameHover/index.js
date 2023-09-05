import { AnimatePresence } from "framer-motion";
function FrameHover({ children, isHovered }) {
  return <AnimatePresence >{isHovered && children}</AnimatePresence>;
}

export default FrameHover;
