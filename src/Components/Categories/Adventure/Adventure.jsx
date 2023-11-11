import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Elements from "../Elements";
import AdventureList from "./AdventureList";

function Adventure() {
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
    <div className="adventure" id="Adventure">
      <h2 className="Categories-title ">Adventure</h2>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={true}
        slidesToSlide={3}
        autoPlay={false}
        autoPlaySpeed={1000}
        infinite={true}
      >
        {AdventureList.map((Item) => (
          <Elements key={Item.id} title={Item.title} imageURL={Item.imageURL} />
        ))}
      </Carousel>
    </div>
  );
}

export default Adventure;
