import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/css/card.css";
import { getCartAction } from "../../redux/reducers/productReducer";

const Card = ({ prod }) => {
  const { cartList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const addToCart = (shoeClick) => {
    dispatch(getCartAction(shoeClick));
  };

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3">
      <div
        className="card"
        style={{ overflow: "hidden", textDecoration: "none" }}
      >
        <NavLink to={`/detail/${prod.id}`} className="image">
          <img
            className="w-100 card-image"
            src={prod.image}
            alt="..."
            style={{ objectFit: "contain" }}
          />
        </NavLink>
        <div className="card-body">
          <div className="name-content text-center">
            <NavLink
              to={`/detail/${prod.id}`}
              className="name"
              style={{
                color: "#000000ab",
                fontSize: 19,
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              {prod.name}
            </NavLink>
          </div>
          <div className="row w-100" style={{ margin: 0 }}>
            <div
              className="col-4"
              style={{
                overflow: "hidden",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <span
                className="price h-100 fs-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#bd0202",
                  fontWeight: "800",
                }}
              >
                ${prod.price}
              </span>
            </div>
            <div
              className="col-12 text-center"
              style={{ overflow: "hidden", padding: 0 }}
            >
              <button
                className="btn add-to-cart w-100 fs-3"
                onClick={() => {
                  addToCart(prod);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
