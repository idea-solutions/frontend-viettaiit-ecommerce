import "./button.scss";
function Button({ children, type, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type} ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
