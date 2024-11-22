import { useState } from "react";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
    setSelectedImage(image);
  };

  return (
    <div className="ImageGallery lg:flex-row  flex-col flex gap-4">
      <div className=" lg:order-1 order-2 MoreImage-Grid flex lg:flex-col flex-row  gap-3">
        <ul className="flex lg:flex-col flex-row gap-2">
          {images.map((image, index) => (
            <li
              key={index}
              className={`DescImage max-w-[152px] h-[167px] cursor-pointer ${
                selectedImage === image
                  ? "border-black border-[1px] rounded-[20px]"
                  : ""
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img
                className="MoreClothImage rounded-[20px] w-full h-full"
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="order-1 lg:order-2 MainImage flex justify-center items-center ">
        <div className="flex max-w-[450px] max-h-[530px]">
          <img
            className="rounded-[20px] max-w-[444px] w-[100%] h-[500px]  "
            src={mainImage}
            alt="Main display"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
