import React from "react"
import logo from "../images/logo.png"
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => (
  <footer>
    <div className="l-container l-vertical-space footer">
      {/* <!-- Single Footer Widget --> */}
      <section className="footer__copyright">
        {/* <!-- Footer Logo --> */}
        <a href="/">
          <img src={logo} alt="" className="copyright__logo" />
        </a>

        <p>
          We would love to serve you and let you enjoy your salon experience.
          Excepteur sint occaecat cupidatat non proident.
        </p>

        {/* <!-- Copyright Text --> */}
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      </section>

      {/* <!-- Single Footer Widget --> */}
      <section className="footer__opening-times">
        {/* <!-- Widget Title --> */}
        <h3 className="footer__title">Opening Times</h3>

        {/* <!-- Open Times --> */}
        <div>
          <p>Monday: Friday: 10.00 - 23.00</p>
          <p>Saturday: 10.00 - 19.00</p>
        </div>

        {/* <!-- Social Info --> */}
        <div className="social-media">
          <a href="#" className="social-icon social-icon--facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon social-icon--twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon social-icon--google-plus">
            <FaGooglePlusG />
          </a>
          <a href="#" className="social-icon social-icon--instagram">
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* <!-- Single Footer Widget --> */}
      <section className="footer__contact">
        {/* <!-- Widget Title --> */}
        <h3 className="footer__title">Contact Us</h3>

        {/* <!-- Contact Address --> */}
        <div>
          <p>Tel: (+12) 345 678 910</p>
          <p>E-mail: salontemplate@gmail.com</p>
          <p>Address: Jane Doe,</p>
          <p>P.O. Box 123 Lodi CA 95241</p>
        </div>
      </section>
    </div>
  </footer>
)

export default Footer
