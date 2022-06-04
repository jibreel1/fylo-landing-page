import React from "react";
import Data from "../../constants/data";
import Images from "../../constants/images";

import "./Testimonial.css";

const TestimonialCard = ({ testimonial: { content, img, name, position } }) => (
   <div className="card">
      <p className="p__opensans">{content}</p>
      <div className="card_author">
         <img src={img} alt="author" />
         <div className="">
            <p className="card_name">{name}</p>
            <p className="card_position">{position}</p>
         </div>
      </div>
   </div>
);

const Testimonials = () => {
   return (
      <div className="testimonial" id="team">
         <img src={Images.quote} alt="" />
         <div className="testimonial_card flex__center">
            {Data.testimonials.map((testimonial, index) => (
               <TestimonialCard
                  testimonial={testimonial}
                  key={testimonial.id + index}
               />
            ))}
         </div>
      </div>
   );
};

export default Testimonials;
