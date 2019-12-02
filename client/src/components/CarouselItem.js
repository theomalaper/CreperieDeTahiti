import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselItem(props) {
  return (
    <Carousel.Item>
      <img className="d-block" src={props.image} alt="First slide" />
      <Carousel.Caption>
        <h3>{props.name}</h3>
        <p>{props.productType}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
