import { Button } from "react-bootstrap";
import ListProductSlide from "../../components/ListProductSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconFire } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, memo } from "react";
import { getProductsHotSales } from "../../features/product/productSlice";

function HotSales() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsHotSales());
  }, [dispatch]);
  const { productsHotSales } = useSelector((store) => store.product);
  console.log("hot sales - re-render");
  return (
    <div className="container">
      <div className="block-sale">
        <div className="block-sale__top">
          <span className="block-sale__top__left">
            <p>HOT SALE CUỐI TUẦN</p>
            <IconFire />
          </span>
          <span className="block-sale__top__right">
            <div className="block-sale__top__right__one">
              <strong>167</strong>
              <small>Ngày</small>
            </div>
            <div className="block-sale__top__right__one">
              <strong>167</strong>
              <small>Giờ</small>
            </div>
            <div className="block-sale__top__right__one">
              <strong>167</strong>
              <small>Phút</small>
            </div>
            <div className="block-sale__top__right__one">
              <strong>167</strong>
              <small>Giây</small>
            </div>
          </span>
        </div>
        <ListProductSlide products={productsHotSales} />
        <div className="d-flex justify-content-center align-items-center pb-3">
          <Button
            className="hover-bg-secondary btn-md btn-icon-text btn-md"
            variant="primary"
          >
            Xem tất cả
            <FontAwesomeIcon className="btn-icon-append" icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(HotSales);
