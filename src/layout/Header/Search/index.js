// FRAMEWORKS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy, useState } from "react";
import { Form } from "react-bootstrap";
// STYLES
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const SearchSuggest = lazy(() => import("./searchSuggest"));
// FAKE DATA SEARCH
function Search({ className }) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={`search ${className}`}
    >
      <Form.Control type="text" placeholder="Tìm kiếm..." />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <SearchSuggest isFocus={isFocus} />
    </div>
  );
}

// ANIMATION SEARCH

export default Search;

Search.propTypes = {
  className: PropTypes.string,
};
