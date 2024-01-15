import "./product-gallery.scss";

import t_img1 from "./Gallerie/image-product-1-thumbnail.jpg";
import t_img2 from "./Gallerie/image-product-2-thumbnail.jpg";
import t_img3 from "./Gallerie/image-product-3-thumbnail.jpg";
import t_img4 from "./Gallerie/image-product-4-thumbnail.jpg";

import image1 from "./Gallerie/image-product-1.jpg";
import image2 from "./Gallerie/image-product-2.jpg";
import image3 from "./Gallerie/image-product-3.jpg";
import image4 from "./Gallerie/image-product-4.jpg";
import { useState } from "react";

export function ProductGallery({onClick, productImageRef }) {
  const gallery_mainImage = [image1, image2, image3, image4];
  const gallery_thumbailsImage = [t_img1, t_img2, t_img3, t_img4];
  const [currentImage, setCurrentImage] = useState(0);

  // console.log(mobileRef)

  const handleClickNext = () => {
    setCurrentImage((v) => (v === gallery_mainImage.length - 1 ? 0 : v + 1));
  };

  const handleClickPrev = () => {
    setCurrentImage((v) => (v === 0 ? gallery_mainImage.length - 1 : v - 1));
  };

  const moveDot = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="product__gallery">
      <div className="close" id="mobile" onClick={onClick}>
        <svg width="34" height="35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
            style={{transform: "scale(2)",}}
          />
        </svg>
      </div>
      <div className="product_gallery_main__image">
        <div
          className="previous btnSlider"
          id="mobile"
          onClick={handleClickPrev}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              fill="none"
              strokeWidth={3}
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="next btnSlider"
          id="mobile"
          onClick={handleClickNext}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              fill="none"
              strokeWidth={3}
              fillRule="evenodd"
            />
          </svg>
        </div>
        {gallery_mainImage.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={image}
            className={index === currentImage ? "active" : ""}
            onClick={onClick}
            ref={productImageRef}
          />
        ))}
      </div>
      <div className="product_gallery_thumbnails__section">
        {gallery_thumbailsImage.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={image}
            className={index === currentImage ? "active" : ""}
            onClick={() => moveDot(index)}
          />
        ))}
      </div>
    </div>
  );
}
