import React, { useState } from "react"
import { Link } from "gatsby";

export default () => {
    const [navbarActive, setNavbarActive] = useState(false);

    return <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <p>One Stop Autos</p>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setNavbarActive(!navbarActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={"navbar-menu " + (navbarActive ? 'is-active' : '')} >
                <div className="navbar-end">
                    <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/services">Services</Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </nav>
}