import React from "react"
import { Link } from "gatsby";

export default ({text}) => ( 
    <>
        <h1>This is a header. {text}</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </>
)