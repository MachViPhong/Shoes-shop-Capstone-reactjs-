import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ContactUs from "../components/ContactUs/ContactUs";
import Header from "../components/Header/Header";
import '../assets/css/HomeTemplate.css'


const HomeTemplates = () => {
  return (
    <div>
      <Header />

      <div
        className="content-outlet"
        style={{ minHeight: "75vh" }}
      >
        <Outlet />
      </div>
      <section className="contact-us">
        <ContactUs />
      </section>
      <footer className="footer p-3 text-center fs-4">
        © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
      </footer>
    </div>
  );
};

export default HomeTemplates;
