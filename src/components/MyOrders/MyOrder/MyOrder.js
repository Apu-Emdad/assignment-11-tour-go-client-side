import React from "react";
import "./MyOrder.css";
// https://stark-citadel-44997.herokuapp.com/orders
const MyOrder = (props) => {
  const { user, name, price, img, _id } = props.order;
  const handleDelete = props.deleteOrder;

  return (
    <div className="col">
      <div className="card bg-secondary h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body card-style">
          <h4 class>{name}</h4>
          <h5>ordered by: {user}</h5>
          <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
