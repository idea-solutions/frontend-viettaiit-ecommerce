function FormControl({ type, placeholder, name }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormControl;
