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
          <h4 className="name text-center" style={{color: '#000000ab', fontWeight: '600', fontSize: 25}}>{prod.name}</h4>
          <div className="row w-100" style={{margin: 0}}>
            <div
              className="col-6 text-center"
              style={{ overflow: "hidden", padding: 0 }}
            >
              <button className="btn btn-success w-75">Buy now</button>
            </div>
            <div
              className="col-6 text-center"
              style={{ overflow: "hidden", padding: 0, display: 'flex' , alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="w-75 border border-secondary h-100 rounded" style={{display: 'flex' , alignItems: 'center', justifyContent: 'center', color: '#000000ab', fontWeight: '500'}}>${prod.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
