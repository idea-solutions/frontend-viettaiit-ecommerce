export const attachAuthToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getAuthFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user") || null);
};
