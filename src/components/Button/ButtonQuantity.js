import PropTypes from "prop-types";
function ButtonQuantity({ children, className }) {
  return (
    <span className={`button-quantity ${className ? className : ""}`}>
      <button>-</button>
      <input className="w-25" value={children || 3} />
      <button>+</button>
    </span>
  );
}

export default ButtonQuantity;
ButtonQuantity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
