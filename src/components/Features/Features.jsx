import React from "react";
import Data from "../../constants/data";
import Images from "../../constants/images";

import "./Features.css";

const FeatureCard = ({ feature: { img, title, subtitle } }) => (
   <div className="features_card" data-aos="zoom-in">
      <img src={img} alt="" />
      <h1 className="headtext__raleway">{title}</h1>
      <p className="p__opensans">{subtitle}</p>
   </div>
);

const Features = () => {
   return (
      <div className="feature" id="features">
         <div className="feature_grid">
            {Data.features.map((feature, index) => (
               <FeatureCard feature={feature} key={feature.id + index} />
            ))}
         </div>
         <div className="article flex__center">
            <img
               className="article_img"
               src={Images.stayProductive}
               alt="stayProductive"
               data-aos="fade-up-right"
            />
            <div className="article_content" data-aos="fade-up-left">
               <h1 className="headtext__raleway">
                  Stay productive, wherever you are
               </h1>
               <div className="article_text">
                  <p className="p__opensans">
                     Never let location be an issue when accessing your files.
                     Fylo has you covered for all of your file storage needs.
                  </p>
                  <p className="p__opensans">
                     Securely share files and folders with friends, family and
                     colleagues for live collaboration. No email attachments
                     required.
                  </p>
               </div>

               <div className="cta">
                  <p className="p_how">See how Fylo works</p>
                  <img className="arrow" src={Images.arrow} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Features;
