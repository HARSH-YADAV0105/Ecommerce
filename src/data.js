import cartItem from "./Assert/Frame 44.png";
import cartItem1 from "./Assert/Frame 45.png";
import cartItem2 from "./Assert/Frame 46.png";
import Style1 from "./Assert/image 11.png";
import Style2 from "./Assert/image 12.png";
import Style3 from "./Assert/image 13.png";
import Style4 from "./Assert/image 14.png";
import Product1 from "./Assert/Frame 48.png";
import Product2 from "./Assert/Frame 49.png";
import Product3 from "./Assert/Frame 50.png";
import Product4 from "./Assert/Frame 51.png";
import Product5 from "./Assert/Frame 52.png";
import Product6 from "./Assert/Frame 53.png";
import Product7 from "./Assert/Frame 54.png";
import Product8 from "./Assert/Frame 55.png";
import Product9 from "./Assert/Frame 42.png";
import Product10 from "./Assert/Frame 40.png";
import Product11 from "./Assert/Frame 41.png";
import Product12 from "./Assert/Frame 42.png";
import Product13 from "./Assert/Frame 43.png";
import Product14 from "./Assert/Frame 35.png";
import Product15 from "./Assert/Frame 36.png";
import Product16 from "./Assert/Frame 37.png";
import Product17 from "./Assert/Frame 39.png";
import Product18 from "./Assert/Frame 32.png";
import Product19 from "./Assert/Frame 33.png";
import Product20 from "./Assert/Frame 34.png";
import Product21 from "./Assert/Frame 38.png";

export const initialCartItems = [
  {
    id: 1,
    image: cartItem,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$240",
    quantity: 1,
    slug: "hfuy-wytfjbw-jvkvo0jno",
  },
  {
    id: 2,
    image: cartItem1,
    name: "Skinny Fit Jeans",
    size: "Medium",
    color: "Blue",
    price: "$180",
    quantity: 1,
    slug: "hfuy-wytfjbw-jvkvo0jno",
  },
  {
    id: 3,
    image: cartItem2,
    name: "Checked Shirt",
    size: "Medium",
    color: "Red",
    price: "$240",
    quantity: 1,
  },
];

export const summaryItems = [
  { label: "SubTotal", value: "$565", valueClass: "text-[#000000]" },
  { label: "Discount", value: "-$113", valueClass: "text-red-500" },
  { label: "Delivery Fees", value: "$15", valueClass: "text-[#000000]" },
  { label: "Total", value: "$467", valueClass: "text-[#000000] font-bold" },
];

export const itemData = [
  {
    img: Style1,
    title: "Casual",
    author: "@bkristastucchio",
    rows: 2.7,
  },
  {
    img: Style3,
    title: "Formal",
    author: "@rollelflex_graphy726",
    rows: 2.7,
    cols: 3,
  },
  {
    img: Style2,
    title: "Party",
    author: "@helloimnik",
    rows: 2.7,
    cols: 3,
  },
  {
    img: Style4,
    title: "Gym",
    author: "@nolanissac",
    rows: 2.7,
  },
];

export const colors = [
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-blue-300",
  "bg-blue-600",
  "bg-purple-500",
  "bg-pink-500",
  "bg-white",
  "bg-black",
];

export const sizes = [
  "XX-small",
  "X-small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-large",
  "3X-large",
  "4X-large",
];

export const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 120,
    label: "$50",
  },
  {
    value: 400,
    label: "$200",
  },
  {
    value: 2000,
    label: "$2000",
  },
];

export const productData = [
  {
    id: 1,
    image: Product9,
    name: "Gradient Graphic T-shirt",
    rating: 4,
    offer: "$120",
    slug: "gradient-graphic-t-shirt",
  },
  {
    id: 2,
    image: Product1,
    name: "Polo with Tipping Details",
    rating: 3,
    price: "$260",
    offer: "$240",
    slug: "polo-trippedd-details",
  },
  {
    id: 3,
    image: Product2,
    name: "Black Striped T-shirt",
    rating: 4,
    offer: "$180",
    slug:"black-striped-t-shirt"
  },

  {
    id: 4,
    image: Product3,
    name: "Skinny Fit Jeans",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"skinny-fit-jeans"
  },
  {
    id: 5,
    image: Product4,
    name: "Checked Shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"checked-shirt"
  },
  {
    id: 6,
    image: Product5,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"slevee-striped-t-shirtt"
  },
  {
    id: 7,
    image: Product6,
    name: "Verticl Striped Shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"verticsl-striped-shirt-2"
  },
  {
    id: 8,
    image: Product7,
    name: "Courage Graphic T-shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"courage-graphic-t-shirt"
  },
  {
    id: 9,
    image: Product8,
    name: "Loose Fit Bermuda Shorts",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"loose-fit-bermuda-shorts"
  },
  {
    id: 10,
    image: Product8,
    name: "Loose Fit Bermuda Shorts",
    rating: 4,
    offer: "$130",
    price: "$160",
  },
  {
    id: 8,
    image: Product7,
    name: "Courage Graphic T-shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
  },
  {
    id: 6,
    image: Product5,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
  },
];

export const productData1 = [
  {
    id: 1,
    image: Product10,
    name: "T-shirt with Tape Details",
    rating: 4,
    offer: "$212",
    price: "$242",
    slug:"hgfsytfgkk-cghvkjjhvjh"
  },
  {
    id: 2,
    image: Product11,
    name: "Skinny Fit Jeans",
    rating: 3,
    offer: "$140",
    slug:"xtxcuyvbkjbiub-hhvj"
  },
  {
    id: 3,
    image: Product12,
    name: "Checked Shirt",
    rating: 4,
    offer: "$180",
    slug:"uibno-dwvdkwvduw"
  },
  {
    id: 4,
    image: Product13,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    offer: "$120",
    price: "$160",
    slug:"tycjhvfiychkvi-njb"
  },
];

export const reviews = [
  {
    name: "Lizard",
    rating: 4,
    reviewText:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    name: "Alice",
    rating: 5,
    reviewText:
      "Amazing quality! I’m thrilled with the variety and the fit of every item. Highly recommend to anyone looking for stylish outfits.",
    verified: true,
  },
  {
    name: "John",
    rating: 4,
    reviewText:
      "The customer service and product quality have been top-notch. I’m definitely a returning customer!",
    verified: true,
  },
  {
    name: "Emily",
    rating: 5,
    reviewText:
      "I love the vibrant designs and high-quality fabrics. Shopping here has always been a pleasure!",
    verified: true,
  },
  {
    name: "Michael",
    rating: 3,
    reviewText:
      "Good selection, although delivery took a little longer than expected. Overall, happy with the products!",
    verified: true,
  },
  {
    name: "Sarah",
    rating: 5,
    reviewText:
      "Absolutely fantastic! Each piece feels tailor-made. I recommend Shop.co to all my friends.",
    verified: true,
  },
];

export const categories = [
  { name: "Men Top Wear", link: "/CategoriesMen" },
  { name: "Men Bottom Wear", link: "/CategoriesMenBottom" },
  { name: "Women Ethnic", link: "/CategoriesWomenEtenic" },
  { name: "Men Footwear", link: "/CategoriesMenFootwear" },
  { name: "Women Footwear", link: "/CategorieswomenFootwear" },
  { name: "Kids", link: "/CategoriesKid" },
  { name: "Watches & Accessories", link: "/CategoriesAccessories" },
];

export const reviewe1 = [
  {
    name: "Samantha D.",
    rating: 4,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Samantha D.",
    rating: 4,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Samantha D.",
    rating: 4,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Samantha D.",
    rating: 4,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    content:
      "Amazing quality and fit. Exceeded my expectations. I’ll definitely buy again!",
    date: "September 5, 2023",
  },
  {
    name: "Etan K.",
    rating: 5,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "September 5, 2023",
  },
  {
    name: "Johnson M.",
    rating: 5,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "September 5, 2023",
  },
  {
    name: "Rick P.",
    rating: 4,
    content:
      "Amazing quality and fit. Exceeded my expectations. I’ll definitely buy again!",
    date: "September 5, 2023",
  },
  {
    name: "Kiya W.",
    rating: 3,
    content:
      "Amazing quality and fit. Exceeded my expectations. I’ll definitely buy again!",
    date: "September 5, 2023",
  },
  {
    name: "Dua L.",
    rating: 3.5,
    content:
      "Amazing quality and fit. Exceeded my expectations. I’ll definitely buy again!",
    date: "September 5, 2023",
  },
  {
    name: "Benziman T.",
    rating: 4,
    content:
      "Amazing quality and fit. Exceeded my expectations. I’ll definitely buy again!",
    date: "September 5, 2023",
  },
];

export const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy lasts 30 days. After 30 days, unfortunately, we can’t offer you a refund or exchange.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Additional fees and taxes may apply for international shipping.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order through the tracking link sent to your email after purchase.",
  },
  {
    question: "Is this Shirt Is HandWashable or Machine Wash?",
    answer: "Yes, This shirt is Machine Washable.",
  },
  {
    question: "Is it the material of cloth is cotton?",
    answer:
      "No , it it is mixed Cotton , not a pure Cotton but fully Comfertable.",
  },
];

export const tabs = [
  { name: "Product Details" },
  { name: "Rating and Reviews" },
  { name: "FAQ" },
];

export const productData2 = [
  {
    id: 1,
    image: Product14,
    name: "T-shirt with Tape Details",
    rating: 4,
    offer: "$120",
    slug:"ttyvbixin-xkknn"
  },
  {
    id: 2,
    image: Product15,
    name: "Skinny Fit Jeans",
    rating: 3,
    price: "$260",
    offer: "$240",
    slug:"qweer-uiommkn"
  },
  {
    id: 3,
    image: Product16,
    name: "Checked Shirt",
    rating: 4,
    offer: "$180",
    slug:"qxaxtbe-penolp"
  },
  {
    id: 4,
    image: Product17,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    offer: "$130",
    price: "$160",
    slug:"wracgvjhb-whgdjwvj"
  },
];

export const productData3 = [
  {
    id: 1,
    image: Product18,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    price: "$232",
    offer: "$212",
    slug:"vutasoqopdmqw-anskjnoda"
  },
  {
    id: 2,
    image: Product19,
    name: "Skinny Fit Jeans",
    rating: 3,
    offer: "$145",
    slug:"oksmqsbqw-qsmqdw-knqk"
  },
  {
    id: 3,
    image: Product20,
    name: "Checked Shirt",
    rating: 4,
    offer: "$80",
    slug:"pplokmijnuh-jhhuhvhhbnkafewsdf-sbbs"
  },
  {
    id: 4,
    image: Product21,
    name: "Sleeve Striped T-Shirt",
    rating: 4,
    offer: "$240",
    slug:"dywvdxaid--ddxa-dxada-aa"
  },
];
