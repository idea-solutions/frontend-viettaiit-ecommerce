function FormControl({ type, placeholder, name, onChange }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormControl;
