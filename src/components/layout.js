import React from "react"
import { Link } from "gatsby";
import './style.scss';
import Navbar from "./navbar";

export default ({ children }) => (
  <div>
    <div>
        <Navbar />
        
    </div>
    {children}
  </div>
)