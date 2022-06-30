import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./Services.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='py-4 service-title'>Our Most Popular Services</h2>

           {
            services.length===0? <div className="spinner-border text-primary mb-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            }

        </div>
    );
};

export default Services;