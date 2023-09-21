import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
function LoadingComp({}) {
  const { isLoadingComp } = useSelector((store) => store.loadingComp);
  return (
    <>
      <AnimatePresence>
        {isLoadingComp && (
          <motion.div
            exit={{ scale: [0.8, 0.2, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="loading-page"
          >
            <div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default LoadingComp;
