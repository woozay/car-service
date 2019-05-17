import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import BlogRoll from '../components/blog-roll';

import { FaRegUser, FaTools, FaCar } from 'react-icons/fa';
import { IoIosPerson } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";

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
                <div class="divider"></div>
                <h2 className="subtitle">We are one of the leading auto repair shops serving customers in Cardiff. All mechanic services are performed by highly qualified mechanics.</h2>
                <div class="columns is-centered p-t-md p-b-lg">
                    <Card title="EVERY JOB IS PERSONAL" content="If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it."><FaRegUser/></Card>
                    <Card title="BEST MATERIALS" content="We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle."><FaTools /></Card>
                    <Card title="PROFESSIONAL STANDARDS" content="Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem."><FaCar /></Card>
                </div>
            </div>
        </section>
        <section className="section has-background-white-bis">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <img src="http://quanticalabs.com/wp_themes/carservice/files/2015/05/image_01.jpg" alt="car bay" />
                    </div>
                    <div className="column">
                        <div className="content">
                            <h1 className="title has-text-centered">VEHICLES SERVICED</h1>
                            <div class="divider"></div>
                            <h4>We provide top notch maintenance service for all types of vehicles. We are certified to service and repair the following makes:</h4>
                            <div className="columns">
                                <div className="column is-paddingless">
                                    <ul>
                                        <li>Audi</li>
                                        <li>BMW</li>
                                        <li>Mercedes</li>
                                    </ul>
                                </div>
                                <div className="column is-paddingless">
                                    <ul className="m-t-none">
                                        <li>Volkswagon</li>
                                        <li>Toyota</li>
                                        <li>Kia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <BlogRoll />
        </section>
    </Layout>
)
