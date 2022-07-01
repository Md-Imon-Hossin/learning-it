import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            {/* contact us top container */}
            <section className='contact-us-container py-4'>
                <div className='contact-us'>
                    <h2>Contact Us</h2>
                    <p className='py-3'>A contact page is a common web page on a website for visitors to contact the organization or individual providing the website. <br /> The page contains one or more of the following items: an e-mail address. a telephone number. <br /> a postal address, sometimes accompanied with a map showing the location.
                    </p>
                </div>
                <div className='contact-us-bottom'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className='contact-bottom-flex'>
                                    <div>
                                        <span><i className="fa fa-solid fa-location-arrow"></i></span>
                                    </div>
                                    <div>
                                        <p>61 Wood Ave. Holly
                                            <br />
                                            Springs, NC 27540</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='contact-bottom-flex'>
                                    <div>
                                        <span><i className="fa fa-solid fa-phone-volume"></i></span>
                                    </div>
                                    <div>
                                        <p>61 Wood Ave. Holly
                                            <br />
                                            Springs, NC 27540</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='contact-bottom-flex'>
                                    <div>
                                        <span><i className="fa fa-solid fa-comment"></i></span>
                                    </div>
                                    <div>
                                        <p>61 Wood Ave. Holly
                                            <br />
                                            Springs, NC 27540</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our experts contact help  */}
            <section>
                <div className='py-5'>
                    <div className="container">
                        <div className="row">
                            <h2 className='mb-5 contact-experts-title'>Our experts will help you</h2>
                            <div className="col-xl-2"></div>
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12"><input className='form-control-lg form-control mb-3' placeholder='Name' type="text" /></div>
                                    <div className="col-xl-6 col-lg-6 col-md-12"><input className='form-control-lg form-control mb-3' placeholder='Email' type="email" /></div>

                                    <div className="col-xl-6 col-lg-6 col-md-12"><input className='form-control-lg form-control mb-3' placeholder='Phone Number' type="text" /></div>
                                    <div className="col-xl-6 col-lg-6 col-md-12"><input className='form-control-lg form-control mb-3' placeholder='Subject' type="email" /></div>

                                    <div className="col-xl-12">
                                        <textarea className='form-control form-control-lg mb-3' placeholder='Your message here' name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <button className='mb-4 send-message text-white'>Send Message</button>
                            </div>
                            <div className="col-xl-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;