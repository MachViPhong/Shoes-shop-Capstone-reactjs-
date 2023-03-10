import { CFormLabel } from "@coreui/react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: [],
  cartList: [],
  categories: "All",
  totalPrice: 0,
  count: 0,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
    getProductCategoriesAction: (state, action) => {
      state.categories = action.payload;
    },
    getCartAction: (state, action) => {
      let newShoeClick = { ...action.payload, number: 1 };
      let newCart = [...state.cartList];
      let indexShoe = newCart.findIndex((shoe) => shoe.id === newShoeClick.id);
      console.log('index: ', indexShoe)
      if (indexShoe !== -1) {
        console.log('shoe index: ', newCart[indexShoe])
        let number = newCart[indexShoe].number + 1;
        newCart[indexShoe] = { ...newCart[indexShoe], number };
        state.cartList = [...newCart];
      } else {
        state.cartList = [...state.cartList, newShoeClick];
      }
      state.totalPrice += newShoeClick.price;
      console.log('totalprice', state.totalPrice);
      state.count++;
    },
    deleteCartAction: (state, action) => {
      let shoeClick = { ...action.payload };
      console.log('shoeClick hello: ', shoeClick)

      let newCart = [...state.cartList];
      newCart = newCart.filter((shoe) => shoe.id !== shoeClick.id);
      state.cartList = [...newCart];
      console.log('state.cartlist', state.cartList);
      state.count--;
      console.log('count', state.count);
      state.totalPrice -= shoeClick.price*shoeClick.number;
      console.log('totalprice', state.totalPrice);
    },
    changeQuantityMinusAction: (state, action) => {
      let newShoeClick = { ...action.payload };
      let newCart = [...state.cartList];
      let shoeFind = newCart.find((shoe) => shoe.id === newShoeClick.id);
      if (shoeFind && (shoeFind.number >1)) {
        shoeFind.number--;
        state.totalPrice -= newShoeClick.price;
      }
      else {
        alert('Can\'t reduce quantity below 0')
      }
      state.cartList = [...newCart];
      console.log('state.cartlist', state.cartList);
      console.log('totalprice', state.totalPrice);

    },
    changeQuantityPlusAction: (state, action) => {
      let newShoeClick = { ...action.payload };
      let newCart = [...state.cartList];
      let shoeFind = newCart.find((shoe) => shoe.id === newShoeClick.id);
      if (shoeFind) {
        shoeFind.number++;
        state.totalPrice += newShoeClick.price;
      }
      state.cartList = [...newCart];
      console.log('state.cartlist', state.cartList);
      console.log('totalprice', state.totalPrice);

    },
  
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  getProductCategoriesAction,
  getCartAction,
  deleteCartAction,
  changeQuantityMinusAction,
  changeQuantityPlusAction,
} = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispatch2) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    const action = getProductAction(result.data.content);
    dispatch2(action);
  };
};
export const getDetailProductApi = (id) => {
  return async (dispatch2) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    const action = getProductDetailAction(result.data.content);
    dispatch2(action);
  };
};
