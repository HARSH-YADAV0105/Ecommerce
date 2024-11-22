import React, { useState } from "react";
import { Rating } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImageGallery from "../Components/ ImageGallery";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../store/cart"
const ProductDesc = ({ id,name, rating, price, offer, image }) => {
  const [selectedSize, setSelectedSize] = useState("Large");

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const [selectedColor, setSelectedColor] = useState("#4F4631");

  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const images = [image, image, image];

  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: count,
      })
    );
  };
  return (
    <>
      <div className="flex justify-center items-center pt-[60px] pb-[60px]">
        <div className=" flex justify-center items-center">
          <div className="flex justify-center items-center max-w-[1440px]">
            <div className="  flex justify-center items-center lg:flex-row flex-col md:flex-col sm:flex-col  gap-3">
              <ImageGallery images={[...images]} />
              <div className="IageDesc flex justify-center items-center">
                <div className=" flex justify-center items-center gap-5 flex-col">
                  <div className="ProductName flex flex-col gap-3 text-left ">
                    <div>
                      <h2 className=" text-left text-[40px] font-bold font-integral leading-[48px]">
                        {name}
                      </h2>
                    </div>
                    <div className="text-left flex gap-2  justify-start items-center">
                      <Rating
                        name="size-medium"
                        defaultValue={rating}
                        readOnly
                      />
                      <span className="RattingDesc text-[16px] sm:text-[16px] font-normal">
                        {rating}/5
                      </span>
                    </div>
                    <div className="PriceGrid flex justify-start items-center gap-4">
                      <p className="Amount text-[20px] sm:text-[24px] font-bold leading-[32.4px] lg:text-[32px]">
                        {offer}
                      </p>
                      <p className="Amount text-[20px] sm:text-[24px] line-through lg:text-[32px] text-gray-400 font-bold leading-[32.4px]">
                        {price}
                      </p>
                      <div className="discount-badge pt-[6px] pb-[6px] px-[14px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-[16px]">
                        -40%
                      </div>
                    </div>
                    <div className="desc ">
                      <p className="text-[16px] text-[#00000099] font-sans font-normal leading-[22px] max-w-[590px] text-left  w-full">
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-center w-[100%] max-w-[590px] items-center pt-1">
                    <div className="bg-[#0000001A] h-[1px] max-w-[590px] w-full"></div>
                  </div>
                  <div className="ColourSelection w-full flex flex-col gap-3 text-left">
                    <div className="text-left">
                      <span className="text-[16px] font-sans leading-[22px] text-[#00000099] font-normal">
                        Select Colors
                      </span>
                    </div>
                    <div className="OuterPalette flex">
                      <ul className="colourPalette flex justify-center items-center gap-3">
                        {colors.map((color) => (
                          <li
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className="rounded-[50%] flex justify-center items-center text-center h-[37px] w-[37px] cursor-pointer"
                            style={{ backgroundColor: color }}
                          >
                            {selectedColor === color && (
                              <DoneIcon sx={{ color: "white" }} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className=" flex justify-center w-[100%]  items-center pt-1">
                    <div className="bg-[#0000001A] h-[1px] max-w-[590px] w-full"></div>
                  </div>
                  <div className="SizeSelection w-full flex flex-col gap-4 text-left">
                    <div className="text-left">
                      <span className="text-[16px] font-sans leading-[22px] text-[#00000099] font-normal">
                        Choose Size
                      </span>
                    </div>
                    <div className="OuterPalette flex w-full">
                      <ul className="sizePalette flex justify-start items-center gap-3 w-full">
                        {sizes.map((size) => (
                          <li
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`rounded-[62px] flex justify-center  items-center h-full max-w-[105px] w-full pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[16px] font-normal cursor-pointer ${
                              selectedSize === size
                                ? "bg-[#000000] text-[#FFFFFF]"
                                : "bg-[#F0F0F0] text-[#00000099]"
                            }`}
                          >
                            {size}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className=" flex justify-center w-[100%]  items-center pt-1">
                    <div className="bg-[#0000001A] h-[1px] max-w-[590px] w-full"></div>
                  </div>
                  <div className=" CartOptions flex gap-4 w-full">
                    <div className="QuualityItems flex rounded-[62px] max-w-[167px] w-full pt-[16px] pr-[20px] pb-[16px] pl-[20px] h-full bg-[#F0F0F0]">
                      <ul className="flex justify-between items-center w-[167px]">
                        <li onClick={handleDecrease} className="cursor-pointer">
                          <RemoveIcon />
                        </li>
                        <li className="CartNumberValue text-[16px] font-[500] text-black">
                          {count}
                        </li>
                        <li onClick={handleIncrease} className="cursor-pointer">
                          <AddIcon />
                        </li>
                      </ul>
                    </div>
                    <div
                      className="AddToCartOption flex gap-2 cursor-pointer justify-center items-center max-w-[400px] w-full max-h-[52px]  h-full pt-[16px] pr-[54px] pl-[54px] pb-[16px] rounded-[62px] bg-[#000000]"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCartIcon sx={{ color: "white" }} />
                      <span className="text-white">Add To Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDesc;
