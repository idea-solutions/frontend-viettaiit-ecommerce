const checkEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

const validateFormRegister = (inputs) => {
  const { email, name, password, password2 } = inputs;
  if (!name) {
    return "Tên hiển thị" + " cần phải có";
  }
  if (!checkEmail(email)) {
    return "email" + " không đúng định dạng";
  }
  if (password.length < 5) {
    return "Mật khẩu" + " cần ít nhất 6 kí tự!";
  }
  if (password !== password2) {
    return "Mật khẩu cấp 1 cần phải giống mật khẩu cấp 2!";
  }
  return "";
};

const validateFormLogin = (inputs) => {
  const { email, password } = inputs;
  if (!checkEmail(email)) {
    return "email" + " không đúng định dạng";
  }
  if (password.length < 5) {
    return "Mật khẩu" + " cần ít nhất 6 kí tự!";
  }
  return "";
};

export { validateFormRegister, validateFormLogin };