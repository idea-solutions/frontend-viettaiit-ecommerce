const clientRoutes = {
  home: "/",
  account: {
    main: "/tai-khoan",
    login: "/tai-khoan/dang-nhap",
    register: "/tai-khoan/dang-ky",
    verifyEmail: "/tai-khoan/xac-minh-tai-khoan",
    resetPassword: "/tai-khoan/dat-lai-mat-khau",
  },
  introduce: "/gioi-thieu",
  news: "/tin-tuc",
  policy: "/chinh-sach",
  contact: "/lien-he",
  product: {
    main: "/san-pham",
    productLove: "/san-pham-yeu-thich",
    detail: "/san-pham/chi-tiet",
    love: "/san-pham/san-pham-yeu-thich",
    sales: "/san-pham/san-pham-khuyen-mai",
    search: "/san-pham/search",
  },

  cart: "/cart",
};

export { clientRoutes };
