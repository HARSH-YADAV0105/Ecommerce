import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product/Product";
import HomePage from "./HomePage/HomePage";
import Cart from "./Cart/Cart";
import CategoriesPags from "./Pages/CategoriesPags";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Logo" element={<HomePage />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CategoriesMen" element={<CategoriesPags />} />
            <Route path="/CategoriesMenBottom" element={<CategoriesPags />} />
            <Route path="/CategoriesWomenEtenic" element={<CategoriesPags />} />
            <Route path="/CategoriesMenFootwear" element={<CategoriesPags />} />
            <Route
              path="/CategorieswomenFootwear"
              element={<CategoriesPags />}
            />
            <Route path="/CategoriesKid" element={<CategoriesPags />} />
            <Route path="/CategoriesAccessories" element={<CategoriesPags />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
