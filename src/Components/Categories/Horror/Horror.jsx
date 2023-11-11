import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Elements from "../Elements";
import HorrorList from "./HorrorList";

function Horror() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="horror" id="Horror">
      <h2 className="Categories-title ">Horror</h2>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={true}
        slidesToSlide={3}
        autoPlay={false}
        autoPlaySpeed={4000}
        infinite={true}
      >
        {HorrorList.map((Item) => (
          <Elements key={Item.id} title={Item.title} imageURL={Item.imageURL} />
        ))}
      </Carousel>
    </div>
  );
}

export default Horror;
