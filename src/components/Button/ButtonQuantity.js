import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
function ButtonQuantity({ qty = 1, className, handleChangeQty, setQty }) {
  return (
    <span className={`button-quantity ${className ? className : ""}`}>
      <Button onClick={() => setQty((prev) => prev - 1)}>-</Button>
      <span>
        <Form.Control name="qty" onChange={handleChangeQty} value={qty} />
      </span>
      <Button onClick={() => setQty((prev) => prev + 1)}>+</Button>
    </span>
  );
}

export default ButtonQuantity;
ButtonQuantity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
