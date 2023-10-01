import { Button, Col, Row } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import HelmetCustom from "../../components/HelmetCustom";
import LazyImage from "../../components/LazyImage";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clientRoutes } from "../../routes";
import { formatCurrency } from "../../utils/format";
import { calculatePriceForDiscount } from "../../utils/calculatePrice";
import { useState } from "react";

import ButtonQuantityUpdateQty from "../../components/Button/ButtonQuantityUpdateQty";
import {
  deleteCartItemService,
  updateQtyService,
} from "../../services/cartService";

function Cart() {
  const { user } = useSelector((store) => store.auth);
  const { countCartItem, cart, total } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const renderCartItems = (isTabletOrMobile) => {
    if (isTabletOrMobile)
      return (
        <CartItemsDownDesktop
          countCartItem={countCartItem}
          cart={cart}
          dispatch={dispatch}
        />
      );
    return (
      <CartItemsUpDesktop
        countCartItem={countCartItem}
        dispatch={dispatch}
        cart={cart}
      />
    );
  };
  return (
    <div className="cart">
      <HelmetCustom title="Giỏ hàng" />
      <Breadcrumb title="Giỏ hàng" />

      <div className="container">
        <h3 className="my-4 text-size-22 fw-bold">Giỏ hàng của bạn</h3>
        {user ? (
          <>
            <div className="top">
              <Row className="info">
                <Col xs={6}>
                  <h5>THÔNG TIN SẢN PHẨM</h5>
                </Col>
                <Col xs={2}>
                  <h5 className="text-center"> ĐƠN GIÁ</h5>
                </Col>
                <Col xs={2}>
                  <h5 className="text-center">SỐ LƯỢNG</h5>
                </Col>
                <Col xs={2}>
                  <h5 className="text-center"> THÀNH TIỀN</h5>
                </Col>
              </Row>
              {renderCartItems(isTabletOrMobile)}
            </div>
            <div className="mt-3">
              <Row>
                <Col lg={8} xs={4} md={6}>
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate(clientRoutes.product.main + "/all")}
                  >
                    TIẾP TỤC MUA HÀNG
                  </Button>
                </Col>
                <Col lg={4} xs={8} md={6}>
                  <div className="d-flex justify-content-between">
                    <span className="fw-light">TỔNG TIỀN:</span>
                    <span className="text-size-18 text-danger fw-bold">
                      {formatCurrency(total)}
                    </span>
                  </div>{" "}
                  <Link to={clientRoutes.checkout}>
                    <Button variant="primary w-100 mt-2 hover-bg-secondary btn-md">
                      THANH TOÁN
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </>
        ) : (
          <div className="py-4 px-2 text-center">
            <p className="">
              <Link
                to={clientRoutes.account.login}
                className="text-info fw-bold"
              >
                Đăng nhập
              </Link>
              <span className="ms-1">để mua hàng!</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

function CartItemsDownDesktop({
  countCartItem,
  cart,

  dispatch,
}) {
  console.log("CartItemsDownDesktop");
  return (
    <>
      {countCartItem === 0 ? (
        <div className="text-center py-4 ">
          <span className="me-1">Không có sản phẩm nào! </span>
          <Link to={clientRoutes.product.main + "/all"} className="text-info">
            Mua ngay
          </Link>
        </div>
      ) : (
        <div className="items">
          {cart.cartItems.map((item, index) => (
            <div className="mt-2 border-bottom">
              <div className="left">
                <Link
                  to={
                    clientRoutes.product.detail +
                    "/" +
                    item.productItem.product.slug
                  }
                >
                  <LazyImage
                    className="cursor"
                    src={
                      process.env.REACT_APP_BACKEND_URL +
                      "/static/uploads/" +
                      item.productItem.image
                    }
                  />
                </Link>
                <div className="w-100">
                  <Link
                    className="hover-color-secondary"
                    to={
                      clientRoutes.product.detail +
                      "/" +
                      item.productItem.product.slug
                    }
                  >
                    {item.productItem.product.name}
                  </Link>
                  <small className="mb-2">{item.productItem.color.value}</small>
                  <div className="d-flex justify-content-between">
                    <ButtonQuantityUpdateQty
                      increaseQty={() => {
                        if (item.qty > 1000) return;
                        updateQtyService(
                          {
                            qty: 1,
                            productItemId: item.productItemId,
                          },
                          dispatch
                        );
                      }}
                      decreaseQty={async () => {
                        if (item.qty === 1) {
                          return deleteCartItemService(item.id, dispatch);
                        }
                        updateQtyService(
                          {
                            qty: -1,
                            productItemId: item.productItemId,
                          },
                          dispatch
                        );
                      }}
                      qty={item.qty}
                      className="btn-sm d-flex"
                    />

                    <div>
                      <span className="text-danger fw-bold text-size-14 mb-1">
                        {formatCurrency(
                          calculatePriceForDiscount(
                            item.productItem.product.price,
                            item.productItem.product.discount
                          )
                        )}
                      </span>
                      <Button
                        variant="outline-danger btn-xs"
                        onClick={() => deleteCartItemService(item.id, dispatch)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function CartItemsUpDesktop({ countCartItem, cart, dispatch }) {
  console.log("CartItemsUpDesktop");
  return (
    <>
      {countCartItem === 0 ? (
        <div className="text-center py-4 ">
          <span className="me-1">Không có sản phẩm nào! </span>
          <Link to={clientRoutes.product.main + "/all"} className="text-info">
            Mua ngay
          </Link>
        </div>
      ) : (
        <Row>
          {cart.cartItems.map((item, index) => (
            <Col xs={12} key={index}>
              <Row className="items border-bottom">
                <Col xs={12} md={6}>
                  <div className="left">
                    <Link
                      to={
                        clientRoutes.product.detail +
                        "/" +
                        item.productItem.product.slug
                      }
                    >
                      <LazyImage
                        className="cursor"
                        src={
                          process.env.REACT_APP_BACKEND_URL +
                          "/static/uploads/" +
                          item.productItem.image
                        }
                      />
                    </Link>

                    <div>
                      <Link
                        className="hover-color-secondary"
                        to={
                          clientRoutes.product.detail +
                          "/" +
                          item.productItem.product.slug
                        }
                      >
                        {item.productItem.product.name}
                      </Link>
                      <small className="mb-2">
                        {item.productItem.color.value}
                      </small>
                      <Button
                        variant="outline-danger btn-xs"
                        onClick={() => deleteCartItemService(item.id, dispatch)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col
                  md={2}
                  className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
                >
                  {formatCurrency(
                    calculatePriceForDiscount(
                      item.productItem.product.price,
                      item.productItem.product.discount
                    )
                  )}
                </Col>
                <Col
                  md={2}
                  className="d-flex align-items-center justify-content-center"
                >
                  <ButtonQuantityUpdateQty
                    increaseQty={() => {
                      if (item.qty > 1000) return;
                      updateQtyService(
                        {
                          qty: 1,
                          productItemId: item.productItemId,
                        },
                        dispatch
                      );
                    }}
                    decreaseQty={async () => {
                      if (item.qty === 1) {
                        return deleteCartItemService(item.id, dispatch);
                      }
                      updateQtyService(
                        {
                          qty: -1,
                          productItemId: item.productItemId,
                        },
                        dispatch
                      );
                    }}
                    qty={item.qty}
                    className="btn-sm"
                  />
                </Col>
                <Col
                  xs={2}
                  className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
                >
                  {formatCurrency(
                    calculatePriceForDiscount(
                      item.productItem.product.price,
                      item.productItem.product.discount
                    ) * item.qty
                  )}
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
