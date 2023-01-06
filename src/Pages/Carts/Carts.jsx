import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import "../../assets/css/cart.css"
const Carts = (props) => {
  const { cartList } = props;
  // console.log('cartList: ', cartList)
  const {arrProduct} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    const actionAsyne = getProductApi();
    dispatch(actionAsyne);
  }, [])

  return (
    <div className="container-fluid" style={{padding: 0, margin: 0}}>
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
              <td className="text-white fs-3" style={{fontWeight: 600}}>Image</td>
              <td className="text-white fs-3" style={{fontWeight: 600}}>Name</td>
              <td className="text-white fs-3" style={{fontWeight: 600}}>Price</td>
              <td className="text-white fs-3" style={{fontWeight: 600}}>Quantity</td>
              <td className="text-white fs-3" style={{fontWeight: 600}}>Action</td>
            </tr>
          </thead>
          <tbody>
            {arrProduct?.map((item, index) => {
              return (
                <tr className="shoe" key={index}>
                  <td>
                    <img src={item.image} alt="..." width={100}/>
                  </td>
                  <td className="text-white fs-4">{item.name}</td>
                  <td className="text-white fs-4">{item.price}</td>
                  <td className="text-white fs-4">{item.quantity}</td>
                  <td></td>
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
