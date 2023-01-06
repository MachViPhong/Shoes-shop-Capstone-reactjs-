import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logoPage.png";
import "../../assets/css/header.css"
const Header = () => {
  return (
    <div
      className="container-fluid text-white px-5"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: 'rgb(0 0 0 / 50%)', 
        background: 'rgb(0 0 0 / 80%)',
        // border: '3px solid rgb(0 0 0 / 50%)'
      }}
    >
      <NavLink to='/' className="align-left">
        <img src={logo} alt="logo" style={{ width: 100, height: 100,  }} />
      </NavLink>
      <div className="text-white p-2 nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
          }
          to="/index"
        >
          Home
        </NavLink>
      
        <NavLink
          className={({ isActive }) =>
            isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
          }
          to="/carts"
        >
          Cart
        </NavLink>
     
        <NavLink
          className={({ isActive }) =>
            isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
          }
          to="/search"
        >
          Search
        </NavLink>
      </div>
      <div className="component-header" style={{display: 'flex',justifyContent: 'space-around', alignItems: 'center'}}>
        <div className="component-search">
            <NavLink className='category' to='/carts' style={{textDecoration: 'none'}}><i class="fa fa-shopping-cart mx-2"></i>
            <span className="span-cart">0</span>
            </NavLink>    
        </div>
        <div className="component-login mx-2">
            <NavLink className='category' to='/login' style={{textDecoration: 'none'}}><i class="fa fa-user-circle mx-2"></i>Login</NavLink>    
        </div>
        <div className="component-search mx-2">
            <NavLink className='category' to='/register' style={{textDecoration: 'none'}}><i class="fa fa-address-book mx-2"></i>Register</NavLink>    
        </div>
      </div>
    </div>
  );
};

export default Header;
