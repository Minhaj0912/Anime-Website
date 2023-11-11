import React from "react";
import Poster from "./Poster";
import PosterList from "./PosterLists";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        arrows={false}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {PosterList.map((Item) => (
          <Poster
            key={Item.id}
            title={Item.title}
            airingDate={Item.airingDate}
            description={Item.description}
            imageURL={Item.imageURL}
          />
        ))}
      </Carousel>
    </div>
  );
}
export default Trending;
