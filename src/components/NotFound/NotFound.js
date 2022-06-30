import React from 'react';
import "./NotFound.css";
import error from "../../images/error.jpg";
const NotFound = () => {
    return (
        <div className='error'>
            <h2 className='my-3'>Page is notFound</h2>
            <img style={{width:'70%'}} src={error} alt="" />
        </div>
    );
};

export default NotFound;