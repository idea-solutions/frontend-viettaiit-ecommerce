import HelmetCustom from "../../components/HelmetCustom";
import ProductNone from "../../components/Product/productNone";
import ListProductSlide from "../../components/ListProductSlide";
import Breadcrumb from "../../components/Breadcrumb";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import httpRequest from "../../services/httpRequest";

function ProductSearch() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");
    const getProductsAsync = async () => {
      try {
        const { data } = await httpRequest.get("/products", {
          params: { name },
        });
        setProducts(data.data);
      } catch (error) {}
    };
    getProductsAsync();
  }, [location.search]);

  console.log(products);
  return (
    <div>
      <Breadcrumb title="Tìm kiếm" />
      <HelmetCustom title="Tìm kiếm" />
      <div className="container mt-2">
        <h5 className="fw-bold ">SẢN PHẨM YÊU THÍCH</h5>
        {products && products.length <= 0 ? (
          <ProductNone />
        ) : (
          <ListProductSlide products={products} hiddenSold hiddenDesc cart />
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
