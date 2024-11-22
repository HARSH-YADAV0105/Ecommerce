// import React, { useState } from "react";
// import cartItem from "../Assert/Frame 44.png";
// import cartItem1 from "../Assert/Frame 45.png";
// import cartItem2 from "../Assert/Frame 46.png";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// const initialCartItems = [
//   {
//     id: 1,
//     image: cartItem,
//     name: "Gradient Graphic T-shirt",
//     size: "Large",
//     color: "White",
//     price: "$240",
//   },
//   {
//     id: 2,
//     image: cartItem1,
//     name: "Skinny Fit Jeans",
//     size: "Medium",
//     color: "Blue",
//     price: "$180",
//   },
//   {
//     id: 3,
//     image: cartItem2,
//     name: "Checked Shirt",
//     size: "Medium",
//     color: "Red",
//     price: "$240",
//   },
// ];
// const CartStucture = () => {
//   const [count, setCount] = useState(1);

//   const handleDecrease = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleDelete = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="pt-[80px] pb-[80px]  flex justify-center  items-center">
//       <div className="flex justify-center w-full  items-center pr-8 pl-8">
//         <div className="flex flex-col gap-4 justify-center items-center  max-w-[1240px] w-full">
//           <div className="CartName flex w-full items-start">
//             <h1 className="text-[40px] w-full font-bold font-integral text-black">
//               YOUR CART
//             </h1>
//           </div>
//           <div className="flex justify-center items-center w-[100%]">
//             <div className="flex gap-4 justify-between w-full max-w-[1440px] items-center">
//               {/* <div className="CartItem gap-5 flex flex-col h-full border-[1px] rounded-[20px] pt-[20px] pr-[24px] pb-[20px] pl-[20px]  w-full">
//                 <div className="MainItem flex flex-col justify-center items-center ">
//                   <div className="CartItem w-full gap-4  h-full max-h-[125px] flex justify-between items-center">
//                     <div>
//                       <img src={cartItem} alt="" />
//                     </div>
//                     <div className="flex   w-full justify-between items-center">
//                       <div className="flex justify-between gap-2 items-start flex-col">
//                         <h1 className="prductName text-[20px] font-bold font-sans">
//                           Gradient Graphic T-shirt
//                         </h1>
//                         <div className="flex flex-col">
//                           <span>Size: Large</span>
//                           <span>Color: White</span>
//                         </div>
//                         <div className="Priice">$240</div>
//                       </div>
//                       <div className="flex flex-col justify-between gap-8 items-end">
//                         <div>
//                           <DeleteIcon sx={{ color: "red" }} />
//                         </div>
//                         <div className="QuualityItems flex rounded-[62px] max-w-[167px] w-full pt-[16px] pr-[20px] pb-[16px] pl-[20px] h-full bg-[#F0F0F0]">
//                           <ul className="flex justify-between items-center w-[167px]">
//                             <li
//                               onClick={handleDecrease}
//                               className="cursor-pointer"
//                             >
//                               <RemoveIcon />
//                             </li>
//                             <li className="CartNumberValue text-[16px] font-[500] text-black">
//                               {count}
//                             </li>
//                             <li
//                               onClick={handleIncrease}
//                               className="cursor-pointer"
//                             >
//                               <AddIcon />
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" flex justify-center items-center pt-1">
//                   <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
//                 </div>
//                 <div className="MainItem flex flex-col justify-center items-center ">
//                   <div className="CartItem w-full gap-4  h-full max-h-[125px] flex justify-between items-center">
//                     <div>
//                       <img src={cartItem1} alt="" />
//                     </div>
//                     <div className="flex   w-full justify-between items-center">
//                       <div className="flex justify-between gap-2 items-start flex-col">
//                         <h1 className="prductName text-[20px] font-bold font-sans">
//                           Skinny Fit Jeans
//                         </h1>
//                         <div className="flex flex-col">
//                           <span>Size: Medium</span>
//                           <span>Color: Blue</span>
//                         </div>
//                         <div className="Priice">$180</div>
//                       </div>
//                       <div className="flex flex-col justify-between gap-8 items-end">
//                         <div>
//                           <DeleteIcon sx={{ color: "red" }} />
//                         </div>
//                         <div className="QuualityItems flex rounded-[62px] max-w-[167px] w-full pt-[16px] pr-[20px] pb-[16px] pl-[20px] h-full bg-[#F0F0F0]">
//                           <ul className="flex justify-between items-center w-[167px]">
//                             <li
//                               onClick={handleDecrease}
//                               className="cursor-pointer"
//                             >
//                               <RemoveIcon />
//                             </li>
//                             <li className="CartNumberValue text-[16px] font-[500] text-black">
//                               {count}
//                             </li>
//                             <li
//                               onClick={handleIncrease}
//                               className="cursor-pointer"
//                             >
//                               <AddIcon />
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" flex justify-center items-center pt-1">
//                   <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
//                 </div>
//                 <div className="MainItem flex flex-col justify-center items-center ">
//                   <div className="CartItem w-full gap-4  h-full max-h-[125px] flex justify-between items-center">
//                     <div>
//                       <img src={cartItem2} alt="" />
//                     </div>
//                     <div className="flex   w-full justify-between items-center">
//                       <div className="flex justify-between gap-2 items-start flex-col">
//                         <h1 className="prductName text-[20px] font-bold font-sans">
//                           Checked Shirt
//                         </h1>
//                         <div className="flex flex-col">
//                           <span>Size: Medium</span>
//                           <span>Color: Red</span>
//                         </div>
//                         <div className="Priice">$240</div>
//                       </div>
//                       <div className="flex flex-col justify-between gap-8 items-end">
//                         <div>
//                           <DeleteIcon sx={{ color: "red" }} />
//                         </div>
//                         <div className="QuualityItems flex rounded-[62px] max-w-[167px] w-full pt-[16px] pr-[20px] pb-[16px] pl-[20px] h-full bg-[#F0F0F0]">
//                           <ul className="flex justify-between items-center w-[167px]">
//                             <li
//                               onClick={handleDecrease}
//                               className="cursor-pointer"
//                             >
//                               <RemoveIcon />
//                             </li>
//                             <li className="CartNumberValue text-[16px] font-[500] text-black">
//                               {count}
//                             </li>
//                             <li
//                               onClick={handleIncrease}
//                               className="cursor-pointer"
//                             >
//                               <AddIcon />
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//               <div className="CartItem gap-5 flex flex-col h-full border-[1px] rounded-[20px] p-[20px] w-full">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="MainItem flex flex-col justify-center items-center"
//                   >
//                     <div className="CartItem w-full gap-4 h-full max-h-[125px] flex justify-between items-center">
//                       <div>
//                         <img src={item.image} alt={item.name} />
//                       </div>
//                       <div className="flex w-full justify-between items-center">
//                         <div className="flex flex-col gap-2 items-start">
//                           <h1 className="prductName text-[20px] font-bold font-sans">
//                             {item.name}
//                           </h1>
//                           <div className="flex flex-col">
//                             <span>Size: {item.size}</span>
//                             <span>Color: {item.color}</span>
//                           </div>
//                           <div className="Priice">{item.price}</div>
//                         </div>
//                         <div className="flex flex-col gap-8 items-end">
//                           <div
//                             onClick={() => handleDelete(item.id)}
//                             className="cursor-pointer"
//                           >
//                             <DeleteIcon sx={{ color: "red" }} />
//                           </div>
//                           <div className="QuualityItems flex rounded-[62px] max-w-[167px] w-full p-[16px] h-full bg-[#F0F0F0]">
//                             <ul className="flex justify-between items-center w-[167px]">
//                               <li
//                                 onClick={handleDecrease(item.id)}
//                                 className="cursor-pointer"
//                               >
//                                 <RemoveIcon />
//                               </li>
//                               <li className="CartNumberValue text-[16px] font-[500] text-black">
//                                 {count}
//                               </li>
//                               <li
//                                 onClick={handleIncrease}
//                                 className="cursor-pointer"
//                               >
//                                 <AddIcon />
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex justify-center items-center pt-1">
//                       <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="bg-gray-700 w-full">gfxy</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartStucture;
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SellIcon from "@mui/icons-material/Sell";
import { TextField } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { initialCartItems, summaryItems } from "../data";

const CartStructure = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="pt-[80px] pb-[80px] flex justify-center items-center">
      <div className="flex justify-center w-full items-center pr-8 pl-8">
        <div className="flex flex-col gap-4 justify-center items-center max-w-[1240px] w-full">
          <div className="CartName flex w-full items-start">
            <h1 className="text-[40px] w-full font-bold font-integral text-black">
              YOUR CART
            </h1>
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <div className="flex gap-4 justify-between w-full max-w-[1440px] items-center lg:flex-row md:flex-col sm:flex-col flex-col">
              <div className="CartItem gap-5 flex flex-col h-full border-[1px] rounded-[20px] p-[20px] w-full">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="MainItem flex flex-col justify-center items-center"
                  >
                    <div className="CartItem w-full gap-4 h-full max-h-[125px] flex justify-between items-center">
                      <div>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-2 items-start">
                          <h1 className="prductName text-left lg:text-[20px] md:text-[20px] text-[16px] font-bold font-sans">
                            {item.name}
                          </h1>
                          <div className="flex flex-col justify-center items-start">
                            <span>Size: {item.size}</span>
                            <span>Color: {item.color}</span>
                          </div>
                          <div className="Priice">{item.price}</div>
                        </div>
                        <div className="flex flex-col gap-8 items-end">
                          <div
                            onClick={() => handleDelete(item.id)}
                            className="cursor-pointer"
                          >
                            <DeleteIcon sx={{ color: "red" }} />
                          </div>
                          <div className="QuualityItems flex rounded-[62px] md:max-w-[137px] max-w-[100px] w-full p-[16px] h-full bg-[#F0F0F0]">
                            <ul className="flex justify-between items-center w-[137px]">
                              <li
                                onClick={() => handleDecrease(item.id)}
                                className="cursor-pointer"
                              >
                                <RemoveIcon />
                              </li>
                              <li className="CartNumberValue text-[16px] font-[500] text-black">
                                {item.quantity}
                              </li>
                              <li
                                onClick={() => handleIncrease(item.id)}
                                className="cursor-pointer"
                              >
                                <AddIcon />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center pt-1">
                      <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="OuterOrderSummery gap-6 flex flex-col h-full border-[1px] rounded-[20px] pt-[20px] pb-[20px] pr-[24px] pl-[24px] w-full max-w-[505px]">
                <div className="OrderHead">
                  <h2 className="text-[24px] text-left font-bold ">
                    Order Summary
                  </h2>
                </div>
                {/* <div className="">
                  <ul className="flex  flex-col gap-4">
                    <li className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-[#00000099] text-[20px] font-sans">
                          SubTotal
                        </span>
                      </div>
                      <div>
                        <span className="text-[#000000] font-bold font-sans text-[20px] ">
                          $565
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-[#00000099] text-[20px] font-sans">
                          Discount
                        </span>
                      </div>
                      <div>
                        <span className="text-red-500 font-sans text-[20px] font-bold">
                          -$113
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-[#00000099] text-[20px] font-sans">
                          Delivery Fess
                        </span>
                      </div>
                      <div>
                        <span className="text-[#000000] font-bold font-sans text-[20px] ">
                          $15
                        </span>
                      </div>
                    </li>
                    <div className=" flex justify-center items-center pt-1">
                      <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
                    </div>
                    <li className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-[#000000] text-[20px] font-sans">
                          Total
                        </span>
                      </div>
                      <div>
                        <span className="text-[#000000] font-bold font-sans text-[20px] ">
                          $467
                        </span>
                      </div>
                    </li>
                  </ul>
                </div> */}
                <div className=" BillHead">
                  <ul className="flex flex-col gap-4">
                    {summaryItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between w-full"
                      >
                        <div>
                          <span className="text-[#00000099] text-[20px] font-sans">
                            {item.label}
                          </span>
                        </div>
                        <div>
                          <span
                            className={`font-sans text-[20px] ${item.valueClass}`}
                          >
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                    <div className="flex justify-center items-center pt-1">
                      <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
                    </div>
                  </ul>
                </div>
                <div className=" Coupon w-full flex justify-between gap-4 items-center">
                  <div className="flex w-full relative  justify-center items-center">
                    <SellIcon sx={{ position: "absolute", left: 15 }} />
                    <TextField
                      placeholder="Add Promo Code"
                      sx={{ borderRadius: "50%", border: "3px", width: "100%" }}
                    />
                  </div>
                  <div className="bg-black text-white w-full max-w-[119px] flex justify-center items-center rounded-[20px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]">
                    Apply
                  </div>
                </div>
                <button className="CheckOutBox w-full rounded-[62px] flex gap-3 justify-center items-center bg-black pt-[16px] pb-[16px] pr-[54px] pl-[54px]  text-white">
                  Go to Checkout <ArrowRightAltIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartStructure;
