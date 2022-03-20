import { useState } from "react";
// 1.
import Slider from "react-slick";
import { Product } from "../../types/product";
import ProductBox from "../product-box/ProductBox";
import "./ImageSlider.css";

interface IImageSlider {
  products: Product[];
  slidesToShow: number;
}

const ImageSlider = ({ products, slidesToShow = 3 }: IImageSlider) => {
  // 3.
  const [imageIndex, setImageIndex] = useState(0);

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,

    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 5.
  const templateImages = products.map((prod, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={prod._id}
      >
        <ProductBox
          key={prod.title}
          clickedItem={prod}
          addToCart={() => console.log("Add to cart")}
          margin="0 auto"
        />
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
