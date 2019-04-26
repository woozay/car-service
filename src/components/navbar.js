import React from "react"
import { Link } from "gatsby";

export default () => (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <p>One Stop Autos</p>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
            </div>
        </div>
    </nav>
)