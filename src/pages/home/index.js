// MY IMPORTS

import HelmetCustom from "../../components/HelmetCustom";
import DanhMucNoiBat from "./danhMucNoiBat";
import CategoryProduct from "./categoryProduct";
import React, { useState } from "react";

import HotSales from "./hotSales";
import TopSlide from "./topSlide";
import PromoBoxes from "./promoBoxes";
import Banner from "./banner";
import NewInfoProduct from "./newInfoProduct";
import TinTucCongNghe from "./tinTucCongNghe";
import CustomerOfViettai from "./customerOfViettai";
import useScrollTop from "../../hooks/useScrollTop";

function Home() {
  useScrollTop();
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
          category={"IPhone"}
          // products={productsIphone}
          listSubCategory={[
            "All",
            "Iphone 14 ",
            "Iphone 13 ",
            "Iphone 12 ",
            "Iphone 11 ",
          ]}
          title={"IPhone"}
        />

        <CategoryProduct
          category={"Ipad"}
          // products={productsIpad}
          listSubCategory={[
            "All",
            "Ipad Pro",
            "Ipad Air",
            "Ipad 10.2",
            "Ipad Mini",
          ]}
          title={"Ipad"}
        />

        {/* New Info Product */}

        <NewInfoProduct />

        {/* Macbook */}
        <CategoryProduct
          category={"Macbook"}
          // products={productsMacbook}
          listSubCategory={["All", "Mac Pro", "Mac Air"]}
          title={"Macbook"}
        />

        {/* Apple Watch */}
        <CategoryProduct
          category={"Apple Watch"}
          // products={productsAppleWatch}
          listSubCategory={[
            "All",
            "Apple Watch Ultra",
            "Apple Watch S7",
            "Apple Watch SE",
            "Apple Watch S8",
            "Apple Watch S3",
          ]}
          title={"Apple Watch"}
        />
      </div>

      {/* Tin tuc cong nghe */}
      <TinTucCongNghe />

      {/*   KHÁCH HÀNG CỦA SUDES */}
      <CustomerOfViettai />
    </>
  );
}

export default Home;
