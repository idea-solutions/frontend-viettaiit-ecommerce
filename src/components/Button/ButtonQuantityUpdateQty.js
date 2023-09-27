import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
function ButtonQuantityUpdateQty({
  qty = 1,
  className,
  handleChangeQty,
  increaseQty,
  decreaseQty,
}) {
  return (
    <span className={`button-quantity ${className ? className : ""}`}>
      <Button onClick={decreaseQty}>-</Button>
      <span>
        <Form.Control name="qty" onChange={handleChangeQty} value={qty} />
      </span>
      <Button onClick={increaseQty}>+</Button>
    </span>
  );
}

export default ButtonQuantityUpdateQty;
ButtonQuantityUpdateQty.propTypes = {
  qty: PropTypes.number.isRequired,
  className: PropTypes.string,
  handleChangeQty: PropTypes.func,
  increaseQty: PropTypes.func,
  decreaseQty: PropTypes.func,
};
