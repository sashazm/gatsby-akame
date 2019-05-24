import React from "react"
import logo from "../images/logo.png"


const Footer = () => (
  <footer>
    <div class="l-container l-vertical-space footer">
      {/* <!-- Single Footer Widget --> */}
      <section class="footer__copyright">
        {/* <!-- Footer Logo --> */}
        <a href="/"><img src={logo} alt="" class="copyright__logo"/></a>

        <p>We would love to serve you and let you enjoy your salon experience. Excepteur sint occaecat cupidatat non
          proident.</p>

        {/* <!-- Copyright Text --> */}
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      </section>

      {/* <!-- Single Footer Widget --> */}
      <section class="footer__opening-times">
        {/* <!-- Widget Title --> */}
        <h3 class="footer__title">Opening Times</h3>

        {/* <!-- Open Times --> */}
        <div>
          <p>Monday: Friday: 10.00 - 23.00</p>
          <p>Saturday: 10.00 - 19.00</p>
        </div>

        {/* <!-- Social Info --> */}
        <div class="social-media">
          <a href="#" class="social-icon social-icon--facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon social-icon--twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon social-icon--google-plus"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social-icon social-icon--instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </section>

      {/* <!-- Single Footer Widget --> */}
      <section class="footer__contact">
        {/* <!-- Widget Title --> */}
        <h3 class="footer__title">Contact Us</h3>

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
