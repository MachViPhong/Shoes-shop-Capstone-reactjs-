import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantityMinusAction, changeQuantityPlusAction, deleteCartAction, getProductApi } from "../../redux/reducers/productReducer";
import "../../assets/css/cart.css";
import { NavLink } from "react-router-dom";

const Carts = (props) => {
  const { cartList, totalPrice } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const actionAsyne = getProductApi();
  //   dispatch(actionAsyne);
  // }, []);
  const deleteItem = (shoeClick) => {
    console.log('shoeClick: ', shoeClick)
    dispatch(deleteCartAction(shoeClick));
    console.log('cartList: ', cartList)
  };
  const changeQuantityMinus = (item) => {
    dispatch(changeQuantityMinusAction(item));
  }
  const changeQuantityPlus = (item) => {
    dispatch(changeQuantityPlusAction(item));
  }
  console.log('cartList: ', cartList)

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
                Quantity
              </td>
              <td className="fs-3 text-center" style={{ fontWeight: 600 }}>
                Price
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
                    <NavLink to={`/detail/${item.id}`} style={{ overflow: 'hidden', textDecoration: 'none' }}>
                      <img src={item.image} alt="..." width={100} />
                    </NavLink>
                  </td>
                  <td
                    className="fs-4 text-center"
                    style={{ verticalAlign: "middle" }}
                  >
                    {item.name}
                  </td>
                  <td style={{ verticalAlign: "middle", }}>
                    <div className="fs-4 text-center h-100"
                      style={{
                        display: "flex",
                        gap: 20,
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      <div
                        className="btn-minus rounded fs-4"
                        style={{
                          background: "#000",
                          padding: "10px 20px",
                          color: "#ffffff",
                          fontWeight: 600
                        }}
                        onClick={() => { changeQuantityMinus(item) }}
                      >
                        -
                      </div>
                      {item?.number}
                      <div
                        className="btn-plus rounded fs-4"
                        style={{
                          background: "#000",
                          padding: "10px 20px",
                          color: "#ffffff",
                          fontWeight: 600
                        }}
                        onClick={() => { changeQuantityPlus(item) }}
                      >
                        +
                      </div>
                    </div>

                  </td>
                  <td
                    className="fs-4 text-center"
                    style={{ verticalAlign: "middle" }}
                  >
                    {item.price}
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
                        onClick={() => { deleteItem(item) }}
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

        <div className="total-price" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="text-center fs-2" style={{ fontWeight: 600 }}>Total price:  </div>
          <div className="fs-2" style={{ fontWeight: 600, color: '#da231f' }}>   {totalPrice}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button className="btn submit-order fs-3">SUBMIT ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
