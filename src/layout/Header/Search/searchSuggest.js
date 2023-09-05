import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const listSuggestSearch = [
  "IPhone 8",
  "IPhone 11",
  "IPad Gen 9",
  "Airspod",
  "Sạc nhanh",
  "Cáp Type C",
];
const search = {
  initial: { height: 0, opacity: 0, display: "none" },
  focus: { height: "auto", opacity: 1, display: "block" },
  blur: { height: 0, opacity: 0, display: "none" },
  transition: { duration: 2, ease: "linear" },
};
function SearchSuggest({ isFocus }) {
  return (
    <motion.div
      variants={search}
      initial="initial"
      animate={isFocus ? "focus" : "blur"}
      transition="transition"
      className="suggest"
    >
      <div className="suggest__top">
        <FontAwesomeIcon icon={faFire} />
        <span>TÌM KIẾM NHIỀU NHẤT</span>
      </div>
      <div className="suggest__bottom">
        {listSuggestSearch.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default SearchSuggest;
