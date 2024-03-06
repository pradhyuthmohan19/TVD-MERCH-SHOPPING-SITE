import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kid_banner from "./Components/assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
        <LoginPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
