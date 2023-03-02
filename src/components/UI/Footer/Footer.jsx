import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{marginTop: '5rem'}} >
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">Footer Content</h5>
        <p>
          Here you can use rows and columns to organize your footer content.
        </p>
      </div>
      <footer className="page-footer font-small white pt-4">
        <div className="container-fluid text-center text-md-left ">
          <div className=" d-flex2 ">
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="right-title col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Legal Notice</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Global Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Web Privacy & Cookie Policy</a>
                </li>
                <li>
                  <a href="#!">Privacy Notice for Websites</a>
                </li>
                <li>
                  <a href="#!">Privacy Notice for Customers</a>
                </li>
                <li>
                  <a href="#!">General Terms and Conditions</a>
                </li>
              </ul>
            </div>

            <div className="right-title col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Legal Notice</h5>
              <ul className="list-unstyled2">
                <li>
                  <a href="#">About Sennheiser</a>
                </li>
                <li>
                  <a href="#">Career at Sonova</a>
                </li>
                <li>
                  <a href="#">Press Contacts</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Sennheiser Consumer Ambassador Program</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center py-3">
        © 2023 Sonova Consumer Hearing GmbH
      </div>
    </div>
  );
};

export default Footer;
