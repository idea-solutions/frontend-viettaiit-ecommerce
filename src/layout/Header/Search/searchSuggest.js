import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const listSuggestSearch = [
  "IPhone 11",
  "IPhone 12",
  "Macbook Pro",
  "Macbook Air",
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
          <span key={idx} onClick={() => console.log("dsadas")}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SearchSuggest;

SearchSuggest.propTypes = {
  isFocus: PropTypes.bool,
};
