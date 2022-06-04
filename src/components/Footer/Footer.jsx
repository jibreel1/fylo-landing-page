import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Images from "../../constants/images";
import "./Footer.css";

const SignIn = () => (
   <div className="sign-in flex__center" id="signIn">
      <h1 className="headtext__raleway">Get early access today</h1>
      <p className="p__opensans">
         It only takes a minute to sign up and our free starter tier is
         extremely generous. If you have any questions, our support team would
         be happy to help you.
      </p>
      <div className="sign-in_input flex__center">
         <input type="email" placeholder="email@example.com" />
         <button className=" input_btn">Get Started For Free</button>
      </div>
   </div>
);
const Footer = () => {
   return (
      <div className="footer">
         <SignIn />
         <img src={Images.logo} alt="logo" />
         <div className="footer_grid">
            <div className="footer_contacts">
               <div className="footer_locate">
                  <img src={Images.location} alt="location" />
                  <p className="p__opensans">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua
                  </p>
               </div>
               <div className="contact">
                  <div className="phone">
                     <img src={Images.phone} alt="phone" />
                     <p className="p__opensans">+1-543-123-4567</p>
                  </div>
                  <div className="phone">
                     <img src={Images.email} alt="email" />
                     <p className="p__opensans">example@fylo.com</p>
                  </div>
               </div>
            </div>
            <div className="footer_links">
               <div className="link-1">
                  <li className="p__opensans">About Us</li>
                  <li className="p__opensans">Jobs</li>
                  <li className="p__opensans">Press</li>
                  <li className="p__opensans">Blog</li>
               </div>
               <div className="link-1">
                  <li className="p__opensans">Contact Us</li>
                  <li className="p__opensans">Terms</li>
                  <li className="p__opensans">Privacy</li>
               </div>
            </div>
            <div className="social_links">
               <FaFacebookF
                  style={{
                     fontSize: "2rem",
                     padding: "6px",
                  }}
               />
               <FaTwitter
                  style={{
                     fontSize: "2rem",
                     padding: "6px",
                  }}
               />
               <FaInstagram
                  style={{
                     fontSize: "2rem",
                     padding: "6px",
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default Footer;
