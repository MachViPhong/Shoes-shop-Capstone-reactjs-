import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import Card from "../Card/Card";

const ProductList = () => {
    const {arrProduct} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        const actionAsync = getProductApi();
        dispatch(actionAsync);
    }, [])
  return (
   
      <div className="list w-100 row" style={{margin: 0}}> 
        {arrProduct?.map((item, index) =>{
            return <Card key={index} prod = {item}/>
            
        })}
      </div>
  );
};

export default ProductList;
