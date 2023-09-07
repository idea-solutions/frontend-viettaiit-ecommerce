import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function LazyImage({ src, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.img
      ref={ref}
      className={className ? className : ""}
      src={inView ? src : ""}
      alt=""
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
    />
  );
}

export default LazyImage;
