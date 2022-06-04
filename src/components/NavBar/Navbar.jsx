import React, { useState } from "react";
import Images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleHam = () => {
      setShowMenu(!showMenu);
   };
   return (
      <div className="navbar">
         <div className="navbar__logo">
            <img src={Images.logo} alt="" />
         </div>
         <ul className="navbar__links">
            <li>
               <a href="#features">Features</a>
            </li>
            <li>
               <a href="#team">Team</a>
            </li>
            <li>
               <a href="#signIn">Sign In</a>
            </li>
         </ul>
         <div className="navbar_ham" onClick={toggleHam}>
            <span></span>
            <span></span>
            <span></span>
         </div>
         {showMenu && (
            <div className="ham_menu">
               <ul
                  className="ham__links flex__center"
                  onClick={() => {
                     setShowMenu(false);
                  }}
               >
                  <li>
                     <a href="#features">Features</a>
                  </li>
                  <li>
                     <a href="#team">Team</a>
                  </li>
                  <li>
                     <a href="#signIn">Sign In</a>
                  </li>
               </ul>
            </div>
         )}
      </div>
   );
};

export default Navbar;
