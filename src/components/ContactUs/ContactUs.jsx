import React from "react";
import "./ContactUs.scss";
const ContactUs = () => {
  return (
    <div className="footer" style={{backgroundColor: 'rgb(0 0 0 / 30%)'}}>
      <div class="container-fluid">
        <div class="row r1">
          <div class="col-1 normal"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="content">
              <h1 class="title">GET HELP</h1>
              <ul class="list">
                <li>Home</li>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="content">
              <h1 class="title">SUPPORT</h1>
              <ul class="list">
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <li>Phone</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="content">
              <h1 class="title">REGISTER</h1>
              <ul class="list special">
                <li>register</li>
                <li>login</li>
              </ul>
            </div>
          </div>
          <div class="col-2 normal"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
