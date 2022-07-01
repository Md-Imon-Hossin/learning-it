import React from 'react';
import { Link } from "react-router-dom";
import "./HomeService.css"
const HomeService = (props) => {
    // props destructuring uses
    const { img, name, description, price } = props.homeService;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mb-3 home-card" >
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">Name : {name}</h6>
                                <p className="card-text">{description}</p>
                                <p>Price : {price}</p>
                                <Link to="/services">
                                    <button className='btn btn-primary'>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;