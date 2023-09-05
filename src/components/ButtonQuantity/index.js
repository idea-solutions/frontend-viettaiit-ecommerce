function ButtonQuantity({ children }) {
  return (
    <div className="button-quantity">
      <button>-</button>
      <span>{children || 3}</span>
      <button>+</button>
    </div>
  );
}

export default ButtonQuantity;
