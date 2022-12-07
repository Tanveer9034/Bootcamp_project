import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white bg-mg">
        <div className="container">
          <div className="py-5 my-5">
            <div className="row">
              <div className="col-3">
                <h4>Danzoo Soft</h4>
              </div>
              {/** Row 3 */}
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      Service
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/** Row 3 */}
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      Service
                    </a>
                    <a to="#" className="nav-link p-0 text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/** Row 3 */}
              <div className="col-3">
                <h5>Contact</h5>
                <p>I-11/2 Faqir Aipee Road Islamabad</p>
                <p>Danzoosoft9034@gmail.com</p>
                <p>+92 330 6413014</p>
                <p>+92 308 5747340</p>
              </div>
              <hr className="w-100 mx-auto" />
            </div>
            <div className="row">
              <div class="text-center p-4">
                © 2022 Copyright : Danzoo Soft Islamabad
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
