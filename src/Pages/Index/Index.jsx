import { Carousel } from "antd";
import React from "react";
import carouselImage1 from "../../assets/img/backgroundCarousel.jpg";
import carouselImage2 from "../../assets/img/images (4).jfif";
import carouselImage3 from "../../assets/img/images (9).jfif";
import ProductList from "../../components/ProductList/ProductList";
import "../../assets/css/index.css";

const Index = () => {
  return (
    <>
      <Carousel autoplay className="container ">
        <div className="row ">
          <div className="image col-7">
            <img
              src={carouselImage1}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
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
            <h3 className="name">Product-name</h3>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              impedit provident illum, omnis corrupti fuga. Nulla, voluptatum
              distinctio mollitia vitae quos facer Ullam quod quae voluptatum
              praesentium, ratione sapiente aliquam?
            </p>
            <button className="btn btn-success w-25">Buy now</button>
          </div>
        </div>
        <div className="row">
          <div className="image col-7">
            <img
              src={carouselImage2}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
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
            <h3 className="name">Product-name</h3>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              impedit provident illum, omnis corrupti fuga. Nulla, voluptatum
              distinctio mollitia vitae quos facer Ullam quod quae voluptatum
              praesentium, ratione sapiente aliquam?
            </p>
            <button className="btn btn-success w-25">Buy now</button>
          </div>
        </div>
        <div className="row">
          <div className="image col-7">
            <img
              src={carouselImage3}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
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
            <h3 className="name">Product-name</h3>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              impedit provident illum, omnis corrupti fuga. Nulla, voluptatum
              distinctio mollitia vitae quos facer Ullam quod quae voluptatum
              praesentium, ratione sapiente aliquam?
            </p>
            <button className="btn btn-success w-25">Buy now</button>
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
