import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://stark-citadel-44997.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  console.log(orders);
  //   console.log(user);
  const myOrders = orders.filter((order) => order.user === user.displayName);
  //   console.log(myOrders);
  const handleDelete = (_id) => {
    alert("The order is cancelled");
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
    <div className="my-5">
      <h1 className="text-primary">My Orders</h1>
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 ">
        {myOrders.map((myOrder) => (
          <MyOrder
            key={myOrder._id}
            order={myOrder}
            deleteOrder={handleDelete}
          ></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
