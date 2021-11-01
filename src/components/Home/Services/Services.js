import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div id="services">
      <h1 className="text-primary">Find The Best Tour Plan </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      {/* card start */}
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      {/* card end  */}
    </div>
  );
};

export default Services;
