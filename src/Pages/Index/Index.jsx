import { Carousel } from "antd";
import React from "react";
import carouselImage1 from "../../assets/img/backgroundCarousel.jpg";
import carouselImage2 from "../../assets/img/jordan-blue.jpg";
import carouselImage3 from "../../assets/img/jordan-purple.jpg";
import ProductList from "../../components/ProductList/ProductList";
import "../../assets/css/index.css";

const Index = () => {
  return (
    <>
      <Carousel autoplay className="container">
        <div className="row p-2">
          <div className="image col-7">
            <img
              src={carouselImage1}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className="name fs-1" style={{color: 'white'}}>Nike Jordan White</h3>
            <p className="description fs-5">
            Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác, Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương hiệu giày này.
            </p>
          </div>
        </div>
        <div className="row p-2">
          <div className="image col-7">
            <img
              src={carouselImage2}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className="name fs-1" style={{color: '#0202c4'}}>Nike Jordan Blue</h3>
            <p className="description fs-5">
            Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác, Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương hiệu giày này.
            </p>
          </div>
        </div>
        <div className="row p-2" style={{margin: 0}}>
          <div className="image col-7">
            <img
              src={carouselImage3}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className="name fs-1" style={{color: '#640095'}}>Nike Jordan Purple</h3>
            <p className="description fs-5">
            Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác, Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương hiệu giày này.
            </p>
          </div>
        </div>
      </Carousel>

      <div className="container mt-5">
        <h2 className="title text-center">Product Feature</h2>
        <ProductList />
      </div>
    </>
  );
};

export default Index;
