import React from "react"
import Layout from '../../components/Layout'
import ServicesRoll from "../../components/ServicesRoll";

export default () => {
    return <Layout>
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered">Services</h1>
                <div class="divider"></div>
                <ServicesRoll />
            </div>
        </section>
    </Layout>
}