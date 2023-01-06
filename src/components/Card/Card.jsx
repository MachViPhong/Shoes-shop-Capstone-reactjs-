import React from "react";
import { NavLink } from "react-router-dom";
import  '../../assets/css/card.css'


const Card = ({prod}) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
      <div  className="card" style={{overflow: 'hidden', textDecoration: 'none'}}>
        <NavLink to={`/detail/${prod.id}`} className="image">
          <img className="w-100 card-image"   
            src={prod.image}
            alt="..."
            style={{  objectFit: "contain"}}
          />
        </NavLink>
        <div className="card-body">
          <h4 className="name text-center" style={{color: '#000000ab', fontSize: 27, fontWeight: '600'}}>{prod.name}</h4>
          <div className="row w-100" style={{margin: 0}}>
            <div
              className="col-4"
              style={{ overflow: "hidden", padding: 0, display: 'flex' , alignItems: 'center', justifyContent: 'center', padding: 0 }}
            >
              <span className="price h-100 fs-1" style={{display: 'flex' , alignItems: 'center', justifyContent: 'center', color: '#DA0037', fontWeight: '800'}}>${prod.price}</span>
            </div>
            <div
              className="col-12 text-center"
              style={{ overflow: "hidden", padding: 0 }}
            >
              <button className="btn add-to-cart w-100 fs-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
