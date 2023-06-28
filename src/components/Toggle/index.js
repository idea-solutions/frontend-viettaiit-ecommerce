import { forwardRef } from "react";

const  CustomToggle = forwardRef(({ children, onClick }, ref) => {
  return (
    <span
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  );
});

export default CustomToggle