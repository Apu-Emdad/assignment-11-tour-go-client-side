import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "./images/resized-image-Promo (1).jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/resized-image-Promo.jpeg";

const Banner = () => {
  return (
    <div>
      <Carousel className="">
        <Carousel.Item>
          <img className="d-block w-100 " src={banner1} />
          <Carousel.Caption>
            <h3>Sajek Valley, Bangladesh</h3>
            <p>The green mountains will extract all of your tiredness</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 " src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Jhankar lake, Norway</h3>
            <p>the beauty of Norway has always been a tourist interest</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner2} alt="Third slide" />

          <Carousel.Caption>
            <h3>African Savanna</h3>
            <p>The joyful grasses of open wide land </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
