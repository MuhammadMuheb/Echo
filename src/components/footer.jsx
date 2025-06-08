import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white bg-dark">
        <div className="p-4 pb-0">
          <section>
            <div className="row">

              {/* About Section */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">About Echo</h6>
                <p>
                  Echo Website is a modern website designed for simplicity, speed, and the best user experience.
                </p>
              </div>

              {/* Pages */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Pages</h6>
                <p><Link to="/home" className="text-white">Home</Link></p>
                <p><Link to="/about" className="text-white">About</Link></p>
                <p><Link to="/service" className="text-white">Services</Link></p>
                <p><Link to="/contact" className="text-white">Contact</Link></p>
              </div>

              {/* Resources */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Resources</h6>
                <p><Link to="/help" className="text-white">Help Center</Link></p>
                <p><Link to="/privacy" className="text-white">Privacy Policy</Link></p>
                <p><Link to="/terms" className="text-white">Terms & Conditions</Link></p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Karachi, Pakistan</p>
                <p><i className="fas fa-envelope mr-3"></i> muhebriaz2003@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> +92 340 8715021</p>
              </div>
            </div>
          </section>

          <section className="p_3 p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2025 All rights reserved | Echo Website by Muhammad Muheb Riaz
                </div>
              </div>

              <div className="col-md-5 col-lg-4 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1" href="#"><i className="bi bi-facebook"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#"><i className="bi bi-twitter"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#"><i className="bi bi-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
