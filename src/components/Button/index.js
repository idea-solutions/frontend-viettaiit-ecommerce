import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.scss";
function Button({ type, text, icon, iconLeft, iconRight, className }) {
  return (
    <span className="wrapper">
      <button className={`btn btn-${type} ${className ? className : ""}`}>
        {iconLeft ? (
          <>
            <FontAwesomeIcon icon={iconLeft} /> <span>{text}</span>
          </>
        ) : (
          <>
            {iconRight ? (
              <>
                <span>{text}</span> <FontAwesomeIcon icon={iconRight} />
              </>
            ) : (
              <span>{text}</span>
            )}
          </>
        )}
      </button>
    </span>
  );
}

export default Button;
