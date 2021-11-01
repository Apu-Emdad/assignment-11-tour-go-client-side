import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";

const Purchase = () => {
  const [item, setItem] = useState({});
  const [orderedItem, setOrderedItem] = useState({});
  const { purchaseId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const history = useHistory();
  //   console.log(purchaseId);
  const url = `http://localhost:5000/services/${purchaseId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItem(data);
        delete data._id;
        console.log(data);
      });
  }, []);
  console.log(user);

  const onSubmit = (data) => {
    // console.log(data);
    const userOrder = { ...data, ...item };
    console.log(userOrder);
    // setOrderedItem(userOrder);

    axios.post("http://localhost:5000/orders", userOrder).then((res) => {
      //   console.log(res);
      if (res.data.insertedId) {
        reset();
        history.push("/home");
      }
    });
  };

  return (
    <div className="add-service border w-50 mx-auto border-3 my-5 py-5 rounded-3 shadow-lg">
      <h4 className="text-light">Fill The Form To Purchase the Service</h4>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("user", { required: true, maxLength: 20 })}
          placeholder="name"
          value={user.displayName}
        />
        <input
          type="email"
          {...register("email", { required: true, maxLength: 20 })}
          placeholder="email"
        />
        <input type="text" placeholder="Your Address" />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default Purchase;
