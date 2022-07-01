import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import class1 from "../../images/class-1.jpg";
import class2 from "../../images/class-2.jpg";
import class3 from "../../images/class-3.jpg";
import class4 from "../../images/class-4.jpg";
import class5 from "../../images/class-5.jpg";
import class6 from "../../images/class-6.jpg";
import class7 from "../../images/class-7.jpg";
import class8 from "../../images/class-8.jpg";
import Faq from '../Faq/Faq';
import "./About.css";
const About = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("./Faqs.JSON")
            .then(res => res.json())
            .then(data => setFaqs(data));
    }, [])
    return (
        <div>
            <section className='about-top-container'>
                <div className='about-top-description py-5'>
                    <h2>About</h2>
                    <p>IT is one of our most popular categories, with in-depth courses and tutorials across all aspects of information technology. Sign up today to learn about cryptocurrency, blockchain, computer networking and server management.</p>
                </div>

                <div className='about-bottom-described'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100 ">
                                    <div className="card-body">

                                        <span className='about-described-icon'>
                                            <i className="fa fa-solid fa-user-graduate"></i>
                                        </span>

                                        <h4>Get a certificated</h4>
                                        <p>Recorded online courses are a great way to learn public speaking. It's a way to get tips and information down quickly. Most likely, you have taken an online.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100">
                                    <div className="card-body">
                                        <span className='about-described-icon'>
                                            <i className="fa fa-solid fa-globe"></i>
                                        </span>
                                        <h4>All over the globe</h4>
                                        <p>All over the place is also used to mean that something or someone is chaotic or disorganized, as in The weather this week has been all over the place.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100">
                                    <div className="card-body">

                                        <span className='about-described-icon'>
                                            <i className="fa fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Live online lectures</h4>
                                        <p>Live lectures are live educational video classes held online, as opposed to in-person lectures. These lectures are generally conducted .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100">
                                    <div className="card-body">
                                        <span className='about-described-icon'>
                                            <i className="fa fa-solid fa-book-open"></i>
                                        </span>
                                        <h4>Educational materials</h4>
                                        <p>There are many kinds of instructional materials, but some of the most used ones are traditional resources, graphic organizers. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100">
                                    <div className="card-body">
                                        <span className='about-described-icon'>
                                            <i className="fa fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Professional teachers</h4>
                                        <p>On the most basic level, the definition of “professional teacher” refers to the status of a person who is paid to teach. It can also, on a higher level.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="card about-card h-100">
                                    <div className="card-body">
                                        <span className='about-described-icon'>
                                            <i className="fas-brands fa-watchman-monitoring"></i>
                                        </span>
                                        <h4>Accessibility programs</h4>
                                        <p>Assistive technologies can include: Screen readers, Braille keypads, or screen magnification software so users blind vision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about happy students  */}
            <section>
                <div className='counting mt-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <h4 >750
                                </h4>
                                <p >HAPPY STUDENTS</p>
                            </div>
                            <div className="col-xl-3">

                                <h4 >869
                                </h4>
                                <p >APPROVED COURSES</p>
                            </div>
                            <div className="col-xl-3">
                                <h4 >248
                                </h4>
                                <p >CERTIFIED TEACHERS</p>
                            </div>
                            <div className="col-xl-3">
                                <h4 >2400
                                </h4>
                                <p >GRADUATED STUDENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* class gallery */}
            <section>
                <div className='py-5'>
                    <div className="container">
                        <h2 className='mb-5 gallery-title'>Our Class Gallery</h2>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class1} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class2} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class3} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class4} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class5} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class6} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class7} alt="" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
                                <img width="100%" src={class8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* frequently ask question */}
            <section className='faqs-container'>
            <Accordion>
                {
                    faqs.map(faq => <Faq
                        key={faq.id}
                        faq={faq}
                    ></Faq>)
                }
</Accordion>
            </section>



        </div>
    );
};

export default About;