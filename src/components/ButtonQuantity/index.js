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
