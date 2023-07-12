import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
const search = {
  initial: { height: 0, opacity: 0 },
  focus: { height: "auto", opacity: 1 },
  blur: { height: 0, opacity: 0 },
  transition: { duration: 2, ease: "linear" },
};
const listSuggestSearch = [
  "IPhone 8",
  "IPhone 11",
  "IPad Gen 9",
  "Airspod",
  "Sạc nhanh",
  "Cáp Type C",
];

function SearchSuggest() {
  return (
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
  );
}

export default SearchSuggest;
