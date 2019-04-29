import React from "react"
import './style.scss';
import Navbar from "./navbar";

export default ({ children }) => (
  <div>    
    <Navbar />
    {children}
  </div>
)