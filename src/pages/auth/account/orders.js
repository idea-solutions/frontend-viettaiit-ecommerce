import {Table } from "react-bootstrap";
import Account from ".";
import { useMediaQuery } from "react-responsive";

function Orders() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return (
    <Account>
      <h5 className=" mt-sm-4 fw-light">ĐƠN HÀNG CỦA BẠN</h5>
      <div className="mt-4">
        {isTabletOrMobile ? <OrdersDownDeskTop /> : <OrdersUpDeskTop />}
      </div>
    </Account>
  );
}

export default Orders;

function OrdersUpDeskTop() {
  return (
    <Table bordered size="sm" className="m-0">
      <thead>
        <tr className="text-center">
          <th className="w-10 bg-danger align-middle">Đơn hàng</th>
          <th className="w-15  bg-danger align-middle">Ngày</th>
          <th className=" bg-danger align-middle">Địa chỉ </th>
          <th className="w-20 bg-danger align-middle">Giá trị đơn hàng </th>
          <th className="w-20  bg-danger align-middle">TT thanh toán</th>
        </tr>
      </thead>
      <tbody className=" position-relative">
        {false ? (
          <div colSpan={5} className=" position-absolute p-center-x">
            Không có đơn hàng nào.
          </div>
        ) : (
          <tr className="text-center">
            <td className="align-middle text-info cursor p-2">#1025</td>
            <td className="align-middle p-2">28/09/2023</td>
            <td className="align-middle p-2">124 Nguyen Tat Thanh, Quận 3, TP Hồ Chí Minh, Vietnam</td>
            <td className="align-middle p-2">835.000₫</td>
            <td className="align-middle p-2">Chưa thu tiền</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

function OrdersDownDeskTop() {
  return (
    <Table >
      <tbody>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Đơn hàng</td>
          <td className="fw-light border border-white text-info cursor">#1025</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Ngày</td>
          <td className="fw-light border border-white">28/09/2023</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Địa chỉ</td>
          <td className="fw-light border border-white">
            124 Nguyen Tat Thanh, Quận 3, TP Hồ Chí Minh, Vietnam
          </td>
        </tr>
        <tr className="text-size-14">
          <td className="w-15 border border-white">Giá trị đơn hàng</td>
          <td className="fw-light border border-white">835.000₫</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">TT thanh toán</td>
          <td className="fw-light border border-white">Chưa thu tiền</td>
        </tr>
      </tbody>

      <hr className="w-100 text-danger" />

      <tbody>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Đơn hàng</td>
          <td className="fw-light border border-white text-info cursor">#1025</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Ngày</td>
          <td className="fw-light border border-white">28/09/2023</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">Địa chỉ</td>
          <td className="fw-light border border-white">
            124 Nguyen Tat Thanh, Quận 3, TP Hồ Chí Minh, Vietnam
          </td>
        </tr>
        <tr className="text-size-14">
          <td className="w-15 border border-white">Giá trị đơn hàng</td>
          <td className="fw-light border border-white">835.000₫</td>
        </tr>
        <tr className="text-size-14">
          <td className="w-10 border border-white">TT thanh toán</td>
          <td className="fw-light border border-white">Chưa thu tiền</td>
        </tr>
      </tbody>
    </Table>
  );
}
