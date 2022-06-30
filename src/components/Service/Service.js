import React from 'react';
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
    const { id, img, name, description, price } = props.service;
    return (
        <div className='main-detail'>
            <div className="container">

                <div className="card mb-4 home-card" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Name : {name}</h6>
                        <p className="card-text">{description}</p>
                        <p>Price : {price}</p>

                        <Link to={`/service/${id}`}>

                            <button className='btn btn-primary'>Buy Course {name} </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;