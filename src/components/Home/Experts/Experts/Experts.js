import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/experts")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data);
      })
      .finally(() => setLoading(false));
  }, []);
  //   console.log(experts);
  return (
    <div id="experts" className="my-5">
      <h2 className="text-primary">Our Best Tour Guides</h2>
      {loading && <Spinner animation="border" variant="danger" />}

      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        {experts.map((expert) => (
          <Expert key={expert._id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
