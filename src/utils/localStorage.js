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

// handle product compare

export const attachProductsCompare = (data = null) => {
  const arrProduct = JSON.parse(localStorage.getItem("productsCompare")) || [];
  if (data !== null) {
    const isHave = arrProduct?.find((product) => product.id === data.id);
    if (!isHave) {
      arrProduct.push(data);
      localStorage.setItem("productsCompare", JSON.stringify(arrProduct));
    }
  }
};

export const getProductsCompare = () => {
  return JSON.parse(localStorage.getItem("productsHaveBeenSaw")) || [];
};

// handle product love

export const attachProductsLove = (data = null) => {
  const arrProduct = JSON.parse(localStorage.getItem("productsLove")) || [];
  if (data !== null) {
    const isHave = arrProduct?.find((product) => product.id === data.id);
    if (!isHave) {
      arrProduct.push(data);
      localStorage.setItem("productsLove", JSON.stringify(arrProduct));
    }
  }
};

export const getProductsLove = () => {
  return JSON.parse(localStorage.getItem("productsLove")) || [];
};
