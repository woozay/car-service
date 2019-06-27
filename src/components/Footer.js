import React from "react"

import useSiteMetadata from './SiteMetadata';
import ContactCard from './ContactCard'
import OpeningTimes from "./OpeningTimes";

export default () => {
    const { title } = useSiteMetadata();

    return <footer className="footer has-background-white-ter has-text-grey">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <p>Copyright © 2019 {title}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <h4>Opening Times</h4>
                        <OpeningTimes />
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    </footer >
}