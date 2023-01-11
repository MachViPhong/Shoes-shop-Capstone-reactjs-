import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: [],
  cartList: [],
  categories: "All",
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
        newCart[indexShoe] = {...newCart[indexShoe], number};
        state.cartList = [...  newCart];

      } else {
        state.cartList = [...state.cartList, newShoeClick];
      }
      console.log('state.cartlist', state.cartList )
    },
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  getProductCategoriesAction,
  getCartAction,
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
