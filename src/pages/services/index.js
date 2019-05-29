import React from "react"
import Layout from '../../components/Layout'
import ServicesRoll from "../../components/ServicesRoll";

export default () => {
    return <Layout>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Services</h1>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <ServicesRoll />
            </div>
        </section>
    </Layout>
}