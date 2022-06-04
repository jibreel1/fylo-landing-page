import Images from "./images";

const features = [
   {
      id: 1,
      img: Images.access,
      title: "Access your files, anywhere",
      subtitle:
         "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
   },
   {
      id: 2,
      img: Images.security,
      title: "Security you can trust",
      subtitle:
         "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
   },
   {
      id: 3,
      img: Images.collabo,
      title: "Real-time collaboration",
      subtitle:
         "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
   },
   {
      id: 4,
      img: Images.anyFiles,
      title: "Store any type of file",
      subtitle:
         "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
   },
];

const testimonials = [
   {
      id: 1,
      content:
         "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Images.profile_1,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
   },
   {
      id: 2,
      content:
         "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Images.profile_2,
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle",
   },
   {
      id: 3,
      content:
         "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Images.profile_3,
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle",
   },
];

const Data = { features, testimonials };

export default Data;
