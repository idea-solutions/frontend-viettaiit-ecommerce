import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ type, text, icon, left, className }) {
  return (
    <button className={`btn btn-${type} ${className ? className : ""}`}>
      {left ? (
        <>
          <FontAwesomeIcon icon={icon} /> <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span> <FontAwesomeIcon icon={icon} />
        </>
      )}
    </button>
  );
}

export default Button;
