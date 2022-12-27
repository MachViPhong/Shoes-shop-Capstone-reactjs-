import React from "react";
import ReactDOM from "react-dom/client";

//Cấu hình react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Cấu hình redux store
import { Provider } from "react-redux";
import { store } from "./redux/ConfigStore";
import HomeTemplate from "./templates/HomeTemplates";
import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Detail from "./Pages/Detail/Detail";
import Carts from "./Pages/Carts/Carts";


const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/*Tạo path rỗng để người dùng vào localhost:3000*/}
          <Route path="" element={<HomeTemplate />}>
            {/* Trang chủ mặc định là index <=> Outlet của HomeTemplate*/}
            <Route index element={<Index />}></Route>
            <Route path="index" element={<Index />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="detail" >
              <Route path=":id" element={<Detail/>}></Route>
            </Route>
            <Route path="carts" element={<Carts />}></Route>

            {/* <Route path='*' element={<Page404 />}></Route> */}
            {/* Nếu bấm đường dẫn không tồn tại thì chuyển thẳng về trang home */}
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
