import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { service } = props;
  const { _id, name, price, description, img } = service;

  return (
    <div className="col container">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class>{name}</h5>
          <Link to={`services/${_id}`}>
            <button className="btn-danger">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
