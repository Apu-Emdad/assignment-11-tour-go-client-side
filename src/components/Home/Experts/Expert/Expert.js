import React from "react";

const Expert = (props) => {
  const { name, description, img } = props.expert;
  return (
    <div className="col container">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Expert;
