import { AnimatePresence } from "framer-motion";
import "./frame-hover.scss";
function FrameHover({ children, isHovered }) {
  return <AnimatePresence >{isHovered && children}</AnimatePresence>;
}

export default FrameHover;
