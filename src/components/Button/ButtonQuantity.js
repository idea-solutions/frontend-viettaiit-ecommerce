import PropTypes from "prop-types";
import { Button, ButtonGroup, Form } from "react-bootstrap";
function ButtonQuantity({ children, className }) {
  return (
    <span className={`button-quantity ${className ? className : ""}`}>
      <Button>-</Button>
      <span>
        <Form.Control name="" value={children | 100} />
      </span>
      <Button>+</Button>
    </span>
  );
}

export default ButtonQuantity;
ButtonQuantity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
