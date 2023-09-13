// handle product da xem

export const attachProductsHaveBeenSaw = (data = null) => {
  const arrProduct =
    JSON.parse(localStorage.getItem("productsHaveBeenSaw")) || [];
  if (data !== null) {
    const isHave = arrProduct?.find((product) => product.id === data.id);
    if (!isHave) {
      arrProduct.unshift(data);
      localStorage.setItem("productsHaveBeenSaw", JSON.stringify(arrProduct));
    }
  }
};

export const getProductsHaveBeenSaw = () => {
  return JSON.parse(localStorage.getItem("productsHaveBeenSaw")) || [];
};


