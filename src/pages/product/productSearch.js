import HelmetCustom from "../../components/HelmetCustom";
import ProductNone from "../../components/Product/productNone";
import ListProductSlide from "../../components/ListProductSlide";
import Breadcrumb from "../../components/Breadcrumb";

function ProductSearch() {
  return (
    <div>
      <Breadcrumb title="Tìm kiếm" />
      <HelmetCustom title="Tìm kiếm" />
      <div className="container mt-2">
        <h5 className="fw-bold ">SẢN PHẨM YÊU THÍCH</h5>
        {true && true ? (
          <ProductNone />
        ) : (
          <ListProductSlide products={[]} hiddenSold hiddenDesc cart />
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
