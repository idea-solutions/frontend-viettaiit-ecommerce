import "./button.scss";
function Button({ children, type }) {
  return <button className={`btn-custom__${type} btn btn-${type}`}>{children}</button>;
}

export default Button;
