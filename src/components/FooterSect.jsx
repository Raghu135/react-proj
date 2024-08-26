import React from 'react';
import "./FooterSect.scss";

function FooterSect() {
  return (
    <footer className="footer">
      <div className="container-fluid footer__content">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 footer__logo">
            <img src="img/logo.png" className="img-fluid footer__logo-image" alt="Logo" />
            <p>Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding space for the referenced image.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 footer__links">
            <h3>Column 2</h3>
            <ul>
              <li><a href="#">Link 4</a></li>
              <li><a href="#">Link 5</a></li>
              <li><a href="#">Link 6</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 footer__links">
            <h3>Column 3</h3>
            <ul>
              <li><a href="#">Link 7</a></li>
              <li><a href="#">Link 8</a></li>
              <li><a href="#">Link 9</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSect;
