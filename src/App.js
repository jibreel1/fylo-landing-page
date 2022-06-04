import React from "react";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
   <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
   </div>
);

export default App;
