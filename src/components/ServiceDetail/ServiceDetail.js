import React, { useEffect, useState } from 'react';
import "./ServiceDetail.css"
import { useParams } from "react-router-dom";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  // data store useState uses
  const [details, setDetails] = useState([]);
  const [singleDetail, setSingleDetail] = useState({});

  // data loaded useEffect uses
  useEffect(() => {
    fetch(`/Services.Json`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [])

  useEffect(() => {
    const foundDetail = details.find(detail => detail.id === serviceId)
    setSingleDetail(foundDetail);
  }, [details])

  return (
    <div>
      <h2 className='py-5 detail-title'>{singleDetail?.name} Service No : {serviceId}</h2>
      <div className="container main-detail-service">
        <div className="card detail-card" >
          <div className="row g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <img src={singleDetail?.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="card-body">
                <h5 className="card-title">Name : {singleDetail?.name} </h5>
                <p className="card-text"> Description : {singleDetail?.description}</p>
                <p className="card-text"><small className="text-muted">Price : {singleDetail?.price} </small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;