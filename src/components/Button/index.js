import "./button.scss";
function Button({ children, type, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn-custom__${type} btn btn-${type} ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
