import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import Card from "../Card/Card";

const ProductList = (props) => {
  const { categories, arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const actionAsync = getProductApi();
    dispatch(actionAsync);
  }, []);
  
  const filterCategories = (item, index) => {
    switch (categories) {
      case "All":
        {
          return <Card key={index} prod={item} />;
        }
        break;
      case "Nike": {
        let position = item.name.toLowerCase().search("nike");
        if (position !== -1) {
          return <Card key={index} prod={item} />;
        }else{
          break;
        }
      }
      case "Adidas": {
        let position = item.name.toLowerCase().search("adidas");
        if (position !== -1) {
          return <Card key={index} prod={item} />;
        }else{
          break;
        }
      }
      case "Vans": {
        let position = item.name.toLowerCase().search("vans");
        if (position !== -1) {
          return <Card key={index} prod={item} />;
        }else{
          break;
        }
      }
      case "Converse": {
        let position = item.name.toLowerCase().search("converse");
        if (position !== -1) {
          return <Card key={index} prod={item} />;
        }else{
          break;
        }
      }
      case "Others": {
        let position1 = item.name.toLowerCase().search("nike");
        let position2 = item.name.toLowerCase().search("adidas");
        let position3 = item.name.toLowerCase().search("vans");
        let position4 = item.name.toLowerCase().search("converse");
        if (position1 === -1 && position2 === -1 && position3 === -1 && position4 === -1) {
          return <Card key={index} prod={item} />;
        }else{
          break;
        }
      }
    }
  };
  return (
    <div className="list w-100 row" style={{ margin: 0 }}>
      {arrProduct?.map((item, index) => {
        return filterCategories(item, index);
      })}
    </div>
  );
};

export default ProductList;
