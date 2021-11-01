import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("https://stark-citadel-44997.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [status]);
  console.log(orders);
  const statusChange = { status: "approved" };

  //update
  const handleStatus = (id) => {
    const uri = `https://stark-citadel-44997.herokuapp.com/orders/${id}`;
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusChange),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          setStatus("approved");
        }
      });
  };

  //   delete
  const handleDelete = (_id) => {
    alert("The order is deleted");
    const url = `https://stark-citadel-44997.herokuapp.com/orders/${_id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.deletedCount);
        if (data.deletedCount) {
          const remaining = orders.filter((order) => order._id !== _id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div className="my-3">
      <h2 className="text-primary ">Manage Orders</h2>
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4  ">
        {orders.map((order) => (
          <div className="col">
            <div className="card bg-secondary h-100 ">
              <img src={order.img} className="card-img-top" alt="..." />
              <div className="card-body card-style">
                <h4 class>{order.name}</h4>
                <h5>ordered by: {order.user}</h5>
                {order.status === "approved" ? (
                  <p className="bg-dark p-3 border rounded-pill">APPROVED</p>
                ) : (
                  <div>
                    <button
                      className="btn btn-primary "
                      onClick={() => handleStatus(order._id)}
                    >
                      Approve the order
                    </button>

                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete Order
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
