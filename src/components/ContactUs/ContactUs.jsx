import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/contactUs.css";
import logoPage from '../../assets/img/logoPage.png'
const ContactUs = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container-fluid">
        <div className="container container-row1">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6">
              <div className="content">
                <h2 className="text-white">
                  {/* Enough Talk, Let's Build Something Together */}
                  Run when you can, walk if you have to, crawl if you must; just never give up.
                </h2>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 offset-xl-2 col-xl-4">
              <div className="button">
                <button
                  className="btn btn-l btn-outline-secondary"
                  type="submit"
                >
                  READ OUT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-row2">
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="content c1">
                <div className="logo">
                  <NavLink to='/index' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={logoPage} alt="logo Page" style={{objectFit: 'cover', width: 200, height: 200}}/>
                  </NavLink>
                </div>
                <div className="text">
                  <p>
                    Copyright © 2022 <NavLink to='/' style={{textDecoration: 'none'}}>Cybersoft</NavLink> All Rights Reserved | Design Theme by <NavLink to='/' style={{textDecoration: 'none'}}>Trương Tấn Khải</NavLink>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 offset-xl-1 col-xl-2">
              <div className="content">
                <h4>Quick Link</h4>
                <div className="list">
                  <ul className="ft-link">
                    <li>
                      <a href="#project">Portfolio</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#news">Our Blog</a>
                    </li>
                    <li>
                      <a href="#testimonnail">Our Team</a>
                    </li>
                    <li>
                      <a href="#footer">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-2">
              <div className="content">
                <h4>Company</h4>
                <div className="list">
                  <ul className="ft-link">
                    <li>
                      <a href="#project">Portfolio</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#news">Our Blog</a>
                    </li>
                    <li>
                      <a href="#testimonnail">Our Team</a>
                    </li>
                    <li>
                      <a href="#footer">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="content">
                <div className="footer-link">
                  <h4>Say Hello</h4>
                  <ul className="ft-link">
                    <li>
                      Email:{" "}
                      <a href="mailto:machviphong21042001@gmail.com">machviphong2104@gmail.com</a>
                    </li>
                    <li>
                      Email: <a href="mailto:hr@example.com">hr@example.com</a>
                    </li>
                    <li>
                      Phone: <a href="tel:0979161290">0979161290</a>
                    </li>
                  </ul>
                  <div className="social-share-inner">
                    <ul className="social-share ">
                      <li className="icon">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="icon">
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li className="icon">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="icon">
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
