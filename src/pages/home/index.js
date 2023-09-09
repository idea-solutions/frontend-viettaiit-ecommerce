// MY IMPORTS

import HelmetCustom from "../../components/HelmetCustom";
import DanhMucNoiBat from "./danhMucNoiBat";
import CategoryProduct from "./categoryProduct";
import { useState } from "react";

import HotSales from "./hotSales";
import TopSlide from "./topSlide";
import PromoBoxes from "./promoBoxes";
import Banner from "./banner";
import NewInfoProduct from "./newInfoProduct";
import TinTucCongNghe from "./tinTucCongNghe";
import CustomerOfViettai from "./customerOfViettai";
import RegisterReceiveNewsletter from "./registerReceiveNewsletter";

function Home() {
  const [testRerender, setTestRerender] = useState(false);
  return (
    <>
      <HelmetCustom title="Trang chủ" />
      <button onClick={() => setTestRerender(!testRerender)}>
        Test re-render
      </button>
      <div className="home">
        {/* TOP SLIDE */}
        <TopSlide />

        {/* PROMO BOX */}
        <PromoBoxes />

        {/* BANNER */}
        <Banner />

        {/* HOT SALES */}
        <HotSales />

        {/* DANH MỤC NỔI BẬT */}
        <DanhMucNoiBat />

        {/* Category Product */}
        {/*  IPHONE*/}
        <CategoryProduct
          listSubCategory={[
            "Iphone 14 series",
            "Iphone 14 series",
            "Iphone 14 series",
            "Iphone 14 series",
          ]}
          title={"IPhone"}
        />
        {/*  Ipad*/}
        <CategoryProduct
          listSubCategory={["Ipad Pro", "Ipad Pro", "Ipad Pro", "Ipad Pro"]}
          title={"Ipad"}
        />

        {/* New Info Product */}

        <NewInfoProduct />

        {/* Macbook */}
        <CategoryProduct
          listSubCategory={["Mac Pro", "Mac Pro", "Mac Pro", "Mac Pro"]}
          title={"Macbook"}
        />

        {/* Apple Watch */}
        <CategoryProduct
          listSubCategory={[
            "Apple Watch Pro",
            "Apple Watch Pro",
            "Apple Watch Pro",
            "Apple Watch Pro",
          ]}
          title={"Apple Watch"}
        />
      </div>

      {/* Tin tuc cong nghe */}
      <TinTucCongNghe />

      {/*   KHÁCH HÀNG CỦA SUDES */}
      <CustomerOfViettai />

      {/* DANG KY NHAN TIN */}
      <RegisterReceiveNewsletter />
    </>
  );
}

export default Home;
