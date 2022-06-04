import React from "react";
import Images from "../../constants/images";

import "./Hero.css";
const Hero = () => {
   return (
      <div className="hero flex__center">
         <div className="hero-img">
            <img src={Images.intro} alt="" />
         </div>
         <div className="hero-text ">
            <h1 className="headtext__raleway">
               All your files in one secure location, accessible anywhere.
            </h1>
            <p className="p__opensans">
               Fylo stores all your most important files in one secure location.
               Access them wherever you need, share and collaborate with friends
               family, and co-workers.
            </p>
            <button className="custom_btn hero_btn">Get Started</button>
         </div>
      </div>
   );
};

export default Hero;
