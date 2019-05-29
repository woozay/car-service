import React from "react"
import './style.scss';
import Navbar from "./Navbar";
import Footer from "./footer";

export default ({ children }) => (
  <div>    
    <Navbar />
    {children}
    <Footer />
  </div>
)