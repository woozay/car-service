import React, {useState} from "react"

import Layout from '../../components/Layout'
import useSiteMetadata from '../../components/SiteMetadata';
import ContactCard from "../../components/ContactCard";
import OpeningTimes from "../../components/OpeningTimes";


export default () => {
    const siteMetadata = useSiteMetadata();


    return <Layout>
        <section className="section p-b-xxs">
            <div className="container">
                <h1 className="title has-text-centered">Contact Us</h1>
                <div class="divider"></div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="content">
                    <ContactCard />
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="content">
                    <h4>Opening Times</h4>
                    <OpeningTimes />
                </div>
            </div>
        </section>
    </Layout>
}