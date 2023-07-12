// FRAMEWORKS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import Form from "react-bootstrap/Form";

// ICONS

// STYLES
import "./search.scss";
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";

// ANIMATION SEARCH
const search = {
  initial: { height: 0, opacity: 0 },
  focus: { height: "auto", opacity: 1 },
  blur: { height: 0, opacity: 0 },
  transition: { duration: 2, ease: "linear" },
};

// FAKE DATA SEARCH
const listSuggestSearch = [
  "IPhone 8",
  "IPhone 11",
  "IPad Gen 9",
  "Airspod",
  "Sạc nhanh",
  "Cáp Type C",
];
function Search({ className }) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div
      initial="initial"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      animate={isFocus ? "focus" : "blur"}
      className={`search ${className}`}
    >
      <Form.Control type="text" placeholder="Tìm kiếm..." />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      {isFocus && (
        <motion.div variants={search} className="suggest">
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
      )}
    </motion.div>
  );
}

export default Search;
