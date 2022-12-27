import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getDetailProductApi } from '../../redux/reducers/productReducer';

const Detail = () => {
  const{productDetail} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(()=>{
    const actionAsync = getDetailProductApi(params.id);
    dispatch(actionAsync);
  }, [params.id])
  console.log('hello', productDetail)
  return (
    <>
      <div className="container mt-4">
        <div className="row ">
          <div className="image col-7">
            <img
              src={productDetail?.image}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className="name">{productDetail?.name}</h3>
            <p className="description">
              {productDetail?.description}
            </p>
            <button className="btn btn-success w-25">Buy now</button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
      <h2 className="title text-center">Related Products</h2>
      <div className="list w-100 row"> 
        {productDetail?.relatedProducts?.map((item, index) =>{
            return <Card key={index} prod = {item}/>
            
        })}
      </div>
    </div>
    </>
  )
}

export default Detail
