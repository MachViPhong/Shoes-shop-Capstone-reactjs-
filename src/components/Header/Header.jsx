import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logoPage.png";
import "../../assets/css/header.css"
import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
const Header = () => {
  const { count } = useSelector((state) => state.productReducer)
  return (
    <>
      <div
        className="container-fluid px-5"
        style={{
          display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
          // backgroundColor: 'rgb(0 0 0 / 50%)', 
          background: '#f5f5f5',
          // border: '3px solid rgb(0 0 0 / 50%)'
        }}
      >
        <NavLink to='/index' className="align-left w-25">
          <img src={logo} alt="logo" style={{ width: 100, height: 100, }} />
        </NavLink>
        <div className="text-white p-2 nav w-50" style={{ display: 'dflex', justifyContent: 'center', alignItems: 'center' }}>
          <NavLink
            className="nav-link mx-2 fs-1"
            to="/index"
            style={{ color: '#da231f' }}
          >
            MVP Shop
          </NavLink>

          {/* <NavLink
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
        </NavLink> */}
        </div>
        <div className="component-header w-25" style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <div className="component-search">
            <NavLink className='category' to='/carts' style={{ textDecoration: 'none' }}><i class="fa fa-shopping-bag mx-2"></i>
              <span className="span-cart">{count}</span>
            </NavLink>
          </div>
          <div className="component-login mx-2">
            <NavLink className='category' to='/login' style={{ textDecoration: 'none' }}><i class="fa fa-user-circle mx-1"></i>Login</NavLink>
          </div>
          {/* <div className="component-search mx-2">
            <NavLink className='category' to='/register' style={{textDecoration: 'none'}}><i class="fa fa-address-book mx-2"></i>Register</NavLink>    
        </div> */}
        </div>
      </div>
      <Breadcrumb style={{ background: '#000', color: '#fff', padding: '10px 0' }}>
        <Breadcrumb.Item> <NavLink
          className={({ isActive }) =>
            isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
          }
          to="/index"
        >
          Home
        </NavLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
            }
            to="/carts"
          >
            Cart
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "choice nav-link mx-2" : "not-choice nav-link mx-2"
            }
            to="/search"
          >
            Search
          </NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>

    </>
  );
};

export default Header;
