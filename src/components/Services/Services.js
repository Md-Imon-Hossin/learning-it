import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    // data store useState uses
    const [services, setServices] = useState([]);
    const [displayServices, setDisplayServices] = useState([]);
    //  data loaded useEffect uses
    useEffect(() => {
        fetch("./Services.JSON")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setDisplayServices(data);
            })
    }, [])

    // search box handleSearch
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const matchedSearch = services.filter(service => service.name.toLowerCase().includes(searchValue));
        setDisplayServices(matchedSearch);
    }
    return (
        <div>
            <h1 className='mt-4 mb-4 service-title'>Our Most Popular Services</h1>
            <input
                type="search"
                className='form-control mb-3 service-search form-control-lg w-75' placeholder='Type here to search'
                onChange={handleSearch}
            />

            {
                services.length === 0 ? <div className="spinner-border  text-primary mb-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                    <div className='services'>
                        {
                            displayServices.map(service => <Service
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