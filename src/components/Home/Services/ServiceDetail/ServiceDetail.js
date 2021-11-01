import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const url = `http://localhost:5000/services/${serviceId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  //   console.log(serviceId);
  return (
    <div class="card text-center">
      <div class="card-header service-header">
        <h4>{service.name}</h4>
        <img src={service.img} alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{service.tour}</h5>
        <p class="card-text">{service.description}</p>
        <Link to={`../purchase/${serviceId}`}>
          <button className="btn btn-danger">
            Purchase for {service.price}$
          </button>
        </Link>
      </div>
      <div class="card-footer text-muted">Have a nice tour</div>
    </div>
  );
};

export default ServiceDetail;
