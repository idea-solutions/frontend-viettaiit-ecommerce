// FRAMEWORKS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy, useRef } from "react";
import { Form } from "react-bootstrap";
// STYLES
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import useHideOnClickOutside from "../../../hooks/useHideOnClickOutSide";
const SearchSuggest = lazy(() => import("./searchSuggest"));
// FAKE DATA SEARCH
function Search({ className }) {
  const searchRef = useRef();
  const [isVisible, setIsVisible] = useHideOnClickOutside(searchRef, false);
  return (
    <div
      onFocus={() => {
        setIsVisible(true);
      }}
      ref={searchRef}
      // onBlur={() => setIsFocus(false)}
      className={`search ${className}`}
    >
      <Form.Control type="text" placeholder="Tìm kiếm..." />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <SearchSuggest isVisible={isVisible} />
    </div>
  );
}

// ANIMATION SEARCH

export default Search;

Search.propTypes = {
  className: PropTypes.string,
};
