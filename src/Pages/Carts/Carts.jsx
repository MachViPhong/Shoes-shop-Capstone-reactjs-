import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import "../../assets/css/cart.css";
import { NavLink } from "react-router-dom";

const Carts = (props) => {
  const { cartList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const actionAsyne = getProductApi();
    dispatch(actionAsyne);
  }, []);

  return (
    <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
      <div className="background-cart">
        <h2 className="text-white text-center title-carousel">Your Cart</h2>
      </div>
      {/* <h1 className="title" style={{ fontSize: 50, fontWeight: 600 }}>
        Cart List
      </h1> */}
      <div className="table-cart text-dark container mt-5">
        <table className="table text-dark">
          <thead>
            <tr>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Image
              </td>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Name
              </td>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Price
              </td>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Quantity
              </td>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((item, index) => {
              return (
                <tr className="shoe" key={index}>
                  <td>
                    <NavLink to={`/detail/${item.id}`} style={{overflow: 'hidden', textDecoration: 'none'}}>
                      <img src={item.image} alt="..." width={100} />
                    </NavLink>
                  </td>
                  <td
                    className="fs-4 text-center"
                    style={{ verticalAlign: "middle" }}
                  >
                    {item.name}
                  </td>
                  <td
                    className="fs-4 text-center"
                    style={{ verticalAlign: "middle" }}
                  >
                    {item.price}
                  </td>
                  <td
                    className="fs-4 text-center"
                    style={{ verticalAlign: "middle" }}
                  >
                    {item.quantity}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div
                      className="content-btn h-100"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <div
                        className="btn-edit bg-primary rounded fs-5"
                        style={{
                          background: "#000",
                          color: "#ffffff",
                          padding: "8px 12px",
                        }}
                      >
                        <i class="fa fa-edit"></i>
                      </div>
                      <div
                        className="btn-delete bg-danger rounded fs-5"
                        style={{
                          background: "#000",
                          color: "#ffffff",
                          padding: "8px 12px",
                        }}
                      >
                        <i class="fa fa-trash-alt"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
