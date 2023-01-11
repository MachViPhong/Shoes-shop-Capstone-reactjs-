import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getDetailProductApi } from "../../redux/reducers/productReducer";
import '../../assets/scss/detail.scss'

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const actionAsync = getDetailProductApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);
  return (
    <>
      <div className="container pt-5">
        <div className="row round" style={{ justifyContent: 'space-around', border: "3px solid #000",}}>
          <div className="image col-12 col-sm-12 col-md-12 col-lg-6" style={{display: 
        'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              src={productDetail?.image}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="img"
            />
          </div>
          <div
            className="content col-12 col-sm-12 col-md-12 col-lg-6 rounded p-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              className="name fs-1"
              style={{ color: "#000", fontWeight: 800 }}
            >
              {productDetail?.name}
            </h3>
            <p className="description">{productDetail?.description}</p>
            <h4 className="fs-3 mt-4 text-success" style={{color: '#000', fontWeight: 600}}>
              Available size
            </h4>
            <div className="list-size" style={{display: 'flex' , justifyContent: 'center',gap: 15}}>
              {productDetail?.size?.map((item, index) => {
                return (
                  <div
                    className="m-2"
                    key={index}
                  >
                    <div
                      className="size text-white text-center rounded p-2 fs-5"
                      style={{
                        background: "#000",
                      }}
                    >
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="price-product fs-1 mt-4"
              style={{color: '#bd0202', fontWeight: 600 }}
            >
              <span style={{color: '#bd0202'}}>Price: </span>${productDetail?.price}
            </div>
            <div
              className="quantity"
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
              }}
            >
              <div
                className="btn-minus rounded fs-4"
                style={{
                  background: "#000",
                  padding: "10px 20px",
                  color: "#ffffff",
                  fontWeight: 600
                }}
              >
                {"  "}-{"  "}
              </div>
              <span className="number text-white" style={{fontSize: 40, fontWeight: 600}}>
                {productDetail?.quantity}
              </span>
              <div
                className="btn-plus rounded fs-4"
                style={{
                  background: "#000",
                  padding: "10px 20px",
                  color: "#ffffff",
                  fontWeight: 600
                }}
              >
                +
              </div>
            </div>
            <button className="btn add-to-cart text-dark text-center  w-100 mt-4 p-2 fs-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="title text-center text-dark pt-5" style={{fontSize: 50}}>Related Products</h2>
        <div className="list w-100 row" style={{justifyContent: 'space-around'}}>
          {productDetail?.relatedProducts?.map((item, index) => {
            return <Card key={index} prod={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Detail;
