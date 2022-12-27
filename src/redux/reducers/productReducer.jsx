import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {

}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state, action ) =>{
        state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action ) =>{
        state.productDetail = action.payload;
    }
  }
});

export const {getProductAction, getProductDetailAction} = productReducer.actions

export default productReducer.reducer

export const getProductApi = () =>{
    return async (dispatch2) =>{
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        });

        const action = getProductAction(result.data.content);
        dispatch2(action);
    }
}
export const getDetailProductApi= (id) =>{
  console.log(id)
    return async (dispatch2) =>{
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: 'GET'
        });
        const action = getProductDetailAction(result.data.content);
        dispatch2(action);
    }
}