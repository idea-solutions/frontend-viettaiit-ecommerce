import PropTypes from "prop-types";
function ButtonQuantity({ children, className }) {
  return (
    <span className={`button-quantity ${className ? className : ""}`}>
      <button>-</button>
      <span>{children || 3}</span>
      <button>+</button>
    </span>
  );
}

export default ButtonQuantity;
ButtonQuantity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
