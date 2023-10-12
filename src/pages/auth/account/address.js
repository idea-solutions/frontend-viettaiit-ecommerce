import { Button } from "react-bootstrap";
import Account from ".";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAddressesMe } from "../../../features/address/addressSlice";

function Address() {
  const dispatch = useDispatch();
  const { addresses } = useSelector((store) => store.address);
  useEffect(() => {
    dispatch(getAddressesMe());
  }, []);
  return (
    <Account>
      <h5 className=" mt-sm-4 fw-light">ĐỊA CHỈ CỦA BẠN</h5>
      <div className="mt-4">
        <Button variant="danger btn-md">Thêm địa chỉ</Button>
      </div>
      {addresses && addresses.length > 0 && (
        <div className="mt-3">
          {addresses.map((address, i) => (
            <div
              key={i}
              className="border-top py-2 d-flex flex-column gap-3 position-relative"
            >
              <span>
                <strong>Họ tên</strong>: {address.fullName}
                {address.using && (
                  <small className="text-size-12 text-success ms-3 fw-light">
                    Địa chỉ mặc định
                  </small>
                )}
              </span>
              <span>
                <strong> Địa chỉ</strong> : {address.residence}, {address.ward},
                {address.district}, {address.province}, {address.country}
              </span>
              <span>
                {" "}
                <strong>Số điện thoại</strong>: {address.phoneNumber}
              </span>
              <span className="d-flex gap-3 position-absolute p-center-y right-1 max-lg-none ">
                <span className="text-danger cursor">Sửa</span>
                {!address.using && (
                  <span className="text-info cursor">Xóa</span>
                )}
              </span>
              <span className="d-flex gap-3 justify-content-end d-none max-lg-display">
                <span className="text-danger cursor">Sửa</span>
                {!address.using && (
                  <span className="text-info cursor">Xóa</span>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </Account>
  );
}

export default Address;
