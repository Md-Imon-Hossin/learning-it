
import Typical from 'react-typical'
import React, { useEffect, useState } from 'react';
import slider1 from "../../images/computer-2.jpg";
import slider2 from "../../images/computer-1.jpg";
import teacher1 from "../../images/teacher1-min.jpeg";
import teacher2 from "../../images/teacher2-min-min.jpg";
import teacher3 from "../../images/teacher3-min.jpg";
import teacher4 from "../../images/teacher4-min-min.jpg";
import HomeService from '../HomeService/HomeService';
import "./Home.css";

const Home = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch("./HomeService.JSON")
            .then(response => response.json())
            .then(data => setHomeServices(data))
    }, [])

    return (
        <div>
            {/* --- Home Banner part ----- */}
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            {/* ------- Home Service Part --------- */}
            <div className='py-4 home-service-title'>
                <Typical
                    steps={['Our-', 1000, 'Our Most Popular Courses', 2000]}
                    loop={2}
                    wrapper="h2"
                />
            </div>
            <div className='homeServices-container'>
                {
                    homeServices.map(homeService => <HomeService
                        key={homeService.id}
                        homeService={homeService}
                    ></HomeService>)
                }
            </div>
            {/* Home Course Teacher Part */}
            <section>
                <div className="container mb-4">
                    <div className="row py-3">
                        <h2 className='mb-4 course-teacher-title'> Course teachers</h2>
                        <div className="col-lg-3">
                            <div className='mb-3 teacher-image'>
                                <img className='w-100 rounded' src={teacher1} alt="" />
                            </div>
                            <div className='teacher-description'>
                                <h5>D.C.S. Grover Wehner
                                </h5>
                                <p> <small>
                                    Developer and Lead Instructor
                                </small> </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='mb-3 teacher-image'>
                                <img className='w-100 rounded' src={teacher4} alt=""  />
                            </div>
                            <div className='teacher-description'>
                                <h5>Oleta Carroll
                                </h5>
                                <p> <small>
                                    Web-developer, UX Architect
                                </small> </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='mb-3 teacher-image'>
                                <img className='w-100 rounded' src={teacher3} alt=""  />
                            </div>
                            <div className='teacher-description'>
                                <h5>Dejuan Maggio
                                </h5>
                                <p> <small>
                                    Web-developer, UX Architect
                                </small> </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='mb-3 teacher-image'>
                                <img className='w-100 rounded' src={teacher2} alt=""  />
                            </div>
                            <div className='teacher-description'>
                                <h5>Steve Weissnat
                                </h5>
                                <p> <small>
                                    Product & Project Management
                                </small> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;