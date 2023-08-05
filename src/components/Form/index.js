import "./form.scss";

function Form({ children, className }) {
  return <form className={className}>{children}</form>;
}

export default Form;
