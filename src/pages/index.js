import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"

export default () => (
    <Layout>
        <section className="hero is-info is-large">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Large title</h1>
                    <h2 className="subtitle">Large subtitle</h2>
                </div>
            </div>
        </section>
        <section className="section">
            <div class="container has-text-centered">
                <h1 className="title">WHY CHOOSE US?</h1>
                <h2 className="subtitle">We are one of the leading auto repair shops serving customers in Cardiff. All mechanic services are performed by highly qualified mechanics.</h2>
                <div class="columns is-centered">
                    <Card title="EVERY JOB IS PERSONAL" content="If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it." />
                    <Card title="BEST MATERIALS" content="We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle." />
                    <Card title="PROFESSIONAL STANDARDS" content="Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem." />
                </div>
            </div>
        </section>

    </Layout>
)
