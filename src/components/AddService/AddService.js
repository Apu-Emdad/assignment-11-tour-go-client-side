import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const useStatus = { status: "pending" };
  const onSubmit = (data) => {
    console.log(data);
    const addedService = { ...data, ...useStatus };
    console.log(addedService);
    axios.post("http://localhost:5000/services/", addedService).then((res) => {
      //   console.log(res);
      if (res.data.insertedId) {
        reset();
      }
    });
  };

  return (
    <div className="add-service my-3 border border-3 rounded-3 w-50 container mx-auto shadow-lg">
      <h1 className="text-light"> Add A Tour Plan</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name  */}
        <input
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        {/* description */}
        <textarea {...register("description")} placeholder="description" />
        {/* tour  */}
        <input
          type="text"
          {...register("tour", { required: true, maxLength: 100 })}
          placeholder="tour plan i.e.: 2 days 3 nights"
        />
        {/* food  */}
        <input
          type="text"
          {...register("food", { required: true, maxLength: 20 })}
          placeholder="foods"
        />
        {/* price */}
        <input type="number" {...register("price")} placeholder="price" />
        {/* image  */}
        <input {...register("img")} placeholder="image url" />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
