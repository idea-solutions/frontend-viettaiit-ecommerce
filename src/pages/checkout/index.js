import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import HelmetCustom from "../../components/HelmetCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { clientRoutes } from "../../routes";
import { faCaretDown, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import LazyImage from "../../components/LazyImage";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/format";
import { calculatePriceForDiscount } from "../../utils/calculatePrice";
import { useEffect, useRef, useState } from "react";
import useHideOnClickOutside from "../../hooks/useHideOnClickOutSide";
import { toastInfo, toastSuccess } from "../../utils/toast";
import axios from "axios";
import { checkPhoneNumber } from "../../utils/validate";
import { addOrderMe, getOrdersMe } from "../../features/order/orderSlice";
function CheckOut() {
  const { cart, countCartItem, total } = useSelector((store) => store.cart);

  const { user } = useSelector((store) => store.auth);
  const [addresses, setAddresses] = useState(null);
  const cityRef = useRef();
  const districtRef = useRef();
  const wardRef = useRef();
  const [isShowSelectOptionCity, setIsShowSelectOptionCity] =
    useHideOnClickOutside(cityRef);
  const [isShowSelectOptionDistrict, setIsShowSelectOptionDistrict] =
    useHideOnClickOutside(districtRef);
  const [isShowSelectOptionWard, setIsShowSelectOptionWard] =
    useHideOnClickOutside(wardRef);
  const [city, setCity] = useState();
  const [district, setDistrict] = useState(null);
  const [ward, setWard] = useState(null);
  const [info, setInfo] = useState({
    phoneNumber: "",
    province: "",
    fullName: "",
    address: "",
    district: "",
    ward: "",
    country: "VN",
    note: "",
  });

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const getAddressesAsync = async () => {
      try {
        const { data } = await axios.get(
          "https://provinces.open-api.vn/api/?depth=3"
        );
        setAddresses(data);
        localStorage.setItem("addresses", JSON.stringify(data));
      } catch (error) {}
    };
    const data = JSON.parse(localStorage.getItem("addresses"));
    if (data) setAddresses(data);
    else getAddressesAsync();
  }, []);
  const handleSelectCity = (city) => {
    setCity(city);
    setDistrict(null);
    setWard(null);
  };
  const handleSelectDistrict = (district) => {
    setDistrict(district);
    setWard(null);
  };

  const handleSelectWard = (ward) => {
    setWard(ward);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phoneNumber } = info;
    if (fullName.length < 3) return toastInfo("Họ và tên yêu cầu!");
    if (!checkPhoneNumber(phoneNumber))
      return toastInfo("Định dạng số điện thoại không hợp lệ!");
    info.province = city.name;
    info.district = district.name;
    info.ward = ward.name;
    const productItems = [];
    const ordersLine = [];
    cart.cartItems.forEach((item) => {
      const orderLine = {
        qty: item.qty,
        productItemId: item.productItemId,
        price: calculatePriceForDiscount(
          item.productItem.product.price,
          item.productItem.product.discount
        ),
      };
      const productItem = {
        image:
          process.env.REACT_APP_BACKEND_URL +
          "/static/uploads/" +
          item.productItem.image,
        qty: item.qty,
        price: calculatePriceForDiscount(
          item.productItem.product.price,
          item.productItem.product.discount
        ),
        colorValue: item.productItem.color.value,
        name: item.productItem.product.name,
        slug: item.productItem.product.slug,
      };
      ordersLine.push(orderLine);
      productItems.push(productItem);
    });
    const inputs = {
      productItems,
      ordersLine,
      ...info,
    };
    const { payload } = await dispatch(addOrderMe(inputs));
    if (payload.status === 200) {
      toastSuccess(payload.message);
      dispatch(getOrdersMe());
      navigate(clientRoutes.checkout + "/cam-on/" + payload.data.id);
    }
  };

  return (
    <div className="vh-100 ">
      <HelmetCustom title="Thanh toán" />
      <div className="container w-70 ">
        <Row>
          <Col md={12} xl={8} className="">
            {/* <FontAwesomeIcon className="icon-size-sm  me-3  " /> */}

            <div className="w-100 flex-center">
              <Link
                to={clientRoutes.home}
                className={`logo d-block fs-4 text-white rounded w-15`}
              >
                <LazyImage src="./logo.png" alt="" />
              </Link>
            </div>
            <Row className="">
              <Col md={12} xl={6}>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold text-size-18 mb-3">
                    Thông tin nhận hàng
                  </span>
                  {/* <Link
                    to={clientRoutes.login}
                    className="text-info fw-bold text-size-14"
                  >
                    <FontAwesomeIcon icon={faUser} className="ms-2" /> Đăng nhập
                  </Link> */}
                </div>
                <Form className="">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email"
                    className="mb-2"
                    disabled
                  >
                    <Form.Control
                      size="sm"
                      type="email"
                      value={user.email}
                      disabled
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Họ và tên"
                    className="mb-2"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Nguyen Viet Tai"
                      value={info?.fullName}
                      name="fullName"
                      onChange={handleChange}
                    />
                  </FloatingLabel>

                  <div className="d-flex mb-2">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Số điện thoại (tùy chọn)"
                      className="w-100"
                    >
                      <Form.Control
                        type="text"
                        placeholder="329638260"
                        value={info?.phoneNumber}
                        name="phoneNumber"
                        onChange={(e) => {
                          // if (info.phoneNumber.length >= 10) return;
                          handleChange(e);
                        }}
                      />
                    </FloatingLabel>
                  </div>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Địa chỉ (tùy chọn)"
                    className="mb-2"
                  >
                    <Form.Control
                      type="text"
                      placeholder="124 Nguyen Tat Thanh"
                      value={info?.address}
                      name="address"
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <div className="d-flex mb-2 position-relative" ref={cityRef}>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Tỉnh thành"
                      className="w-100 d-flex"
                    >
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        value={city?.name ? city.name : ""}
                        onFocus={() => setIsShowSelectOptionCity(true)}
                      ></Form.Control>{" "}
                      <div
                        className="border rounded-2 px-3 flex-center cursor"
                        onClick={() => setIsShowSelectOptionCity(true)}
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </div>
                    </FloatingLabel>
                    {isShowSelectOptionCity && (
                      <SelectOptions
                        setIsShow={setIsShowSelectOptionCity}
                        addresses={addresses}
                        handleSelect={handleSelectCity}
                      ></SelectOptions>
                    )}
                  </div>
                  <div
                    className="d-flex mb-2 position-relative"
                    ref={districtRef}
                  >
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Quận huyện"
                      className="w-100 d-flex"
                    >
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        value={district?.name ? district.name : ""}
                        onFocus={() => {
                          if (!city)
                            return toastInfo("Vui lòng chọn tỉnh/thành");
                          setIsShowSelectOptionDistrict(true);
                        }}
                      ></Form.Control>{" "}
                      <div
                        className="border rounded-2 px-3 flex-center cursor"
                        onClick={() => {
                          if (!city)
                            return toastInfo("Vui lòng chọn tỉnh/thành");
                          setIsShowSelectOptionDistrict(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </div>
                    </FloatingLabel>
                    {isShowSelectOptionDistrict && (
                      <SelectOptions
                        setIsShow={setIsShowSelectOptionDistrict}
                        addresses={city?.districts}
                        handleSelect={handleSelectDistrict}
                      ></SelectOptions>
                    )}
                  </div>
                  <div className="d-flex mb-2 position-relative" ref={wardRef}>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Phường xã"
                      className="w-100 d-flex"
                    >
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        value={ward?.name ? ward.name : ""}
                        onFocus={() => {
                          if (!district)
                            return toastInfo("Vui lòng chọn huyện");
                          setIsShowSelectOptionWard(true);
                        }}
                      ></Form.Control>{" "}
                      <div
                        className="border rounded-2 px-3 flex-center cursor"
                        onClick={() => {
                          if (!district)
                            return toastInfo("Vui lòng chọn huyện");
                          setIsShowSelectOptionWard(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </div>
                    </FloatingLabel>
                    {isShowSelectOptionWard && (
                      <SelectOptions
                        setIsShow={setIsShowSelectOptionWard}
                        addresses={district?.wards}
                        handleSelect={handleSelectWard}
                      ></SelectOptions>
                    )}
                  </div>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Ghi chú (tùy chọn)"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Ghi chú"
                      style={{ height: "70px" }}
                      value={info?.note}
                      name="note"
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Form>
              </Col>
              <Col md={12} xl={6} className="">
                <div className=" mt-sm-5 ">
                  <span className="fw-bold text-size-18 mb-3 d-block">
                    Vận chuyển
                  </span>
                  <div className="d-flex justify-content-between align-items-center p-2 border ">
                    <Form.Check
                      type="radio"
                      label={`Giao hàng tận nơi`}
                      checked={true}
                      className="text-size-14 "
                    />
                    <span className="fw-bold text-size-14">40.000đ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="fw-bold text-size-18">Thanh toán</span>
                  <div className="d-flex justify-content-between align-items-center p-2 border ">
                    <Form.Check
                      type="radio"
                      label={"Thanh toán khi giao hàng (COD)"}
                      checked={true}
                      className="text-size-14 "
                    />
                    <span className="fw-bold text-size-14">
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        className="text-info"
                      />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} xl={4} className="px-0">
            <h6 className=" border-bottom text-size-20 fw-bold py-3 px-4 mb-0">
              Đơn hàng ({countCartItem} sản phẩm)
            </h6>

            <Row>
              <Col md={12} className="ps-5">
                <div>
                  {/* ITEM */}
                  {cart.cartItems.map((item, index) => (
                    <div
                      className="d-flex justify-content-between align-items-center border-bottom py-2"
                      key={index}
                    >
                      <div className="d-flex gap-1 align-items-center">
                        <div className=" position-relative">
                          <LazyImage
                            src={
                              process.env.REACT_APP_BACKEND_URL +
                              "/static/uploads/" +
                              item.productItem.image
                            }
                            alt=""
                            style={{ width: "45px" }}
                            className="border border-info rounded-5"
                          />
                          <div className="px-1 text-size-12 rounded-circle w-5 h-5 d-inline-block position-absolute top--10 right-1 bg-info text-white">
                            4
                          </div>
                        </div>
                        <span className="fw-light text-size-14">
                          {item.productItem.product.name}
                        </span>
                      </div>
                      <div className="fw-light text-size-14">
                        {" "}
                        {formatCurrency(
                          calculatePriceForDiscount(
                            item.productItem.product.price,
                            item.productItem.product.discount
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col md={12} className="ps-5">
                <div className="d-flex gap-2 justify-content-between py-3 border-bottom">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Nhập mã sản phẩm"
                  >
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                  <Button disabled variant="info btn-md">
                    Áp dụng
                  </Button>
                </div>
              </Col>
              <Col md={12} className="ps-5">
                <div className="py-3 border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Tạm tính</span>
                    <span>{formatCurrency(total)}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span>Phí vận chuyển</span>
                    <span>40.000₫</span>
                  </div>
                </div>
              </Col>
              <Col md={12} className="ps-5 mb-10">
                <div className="">
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <span className="text-size-14">Tổng cộng</span>
                    <span className="text-size-16 fw-bold text-info">
                      {formatCurrency(total + 40000)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <Link
                      to={clientRoutes.cart}
                      className="text-size-14 text-info"
                    >
                      ❮ Quay về giỏ hàng
                    </Link>
                    <Button
                      variant="info"
                      className="text-size-16 fw-bold btn-md"
                      onClick={handleSubmit}
                    >
                      ĐẶT HÀNG
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CheckOut;

function SelectOptions({ addresses, handleSelect, setIsShow }) {
  if (!addresses) return null;
  return (
    <div className="select_options scrollbar-primary">
      <span>---</span>
      {addresses.map((address, index) => (
        <span
          key={index}
          onClick={() => {
            handleSelect(address);
            setIsShow(false);
          }}
        >
          {address?.name}
        </span>
      ))}
    </div>
  );
}
