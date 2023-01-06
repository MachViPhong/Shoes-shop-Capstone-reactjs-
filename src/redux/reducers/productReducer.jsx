import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrProduct: [],
    productDetail: [],
    cartList: [{
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "size": "[36,37,38,39,40,41,42]",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "deleted": false,
        "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
        "relatedProducts": "[2,3,5]",
        "feature": true,
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
      },
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "size": "[36,37,38,39,40,41,42]",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 990,
        "deleted": false,
        "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
        "relatedProducts": "[1,4,6]",
        "feature": false,
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "size": "[36,37,38,39,40,41,42]",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 415,
        "deleted": false,
        "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
        "relatedProducts": "[4,5,7]",
        "feature": true,
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
      },]
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