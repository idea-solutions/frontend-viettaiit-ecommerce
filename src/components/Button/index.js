import "./button.scss";
function Button({ children, type, classes }) {
  return (
    <button
      className={`btn-custom__${type} btn btn-${type} ${
        classes ? classes : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
