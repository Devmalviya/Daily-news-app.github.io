import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Your News App is dedicated to bringing you the latest and most
              reliable news from around the world. Stay informed with us!
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email: contact@your-news-app.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/your-news-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com/your-news-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/your-news-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Your News App. All rights reserved.</p>
        <p>Powered by ReactJS</p>
      </div>
    </footer>
  );
};

export default Footer;
