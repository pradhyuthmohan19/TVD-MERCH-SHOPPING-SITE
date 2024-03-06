import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            &#8377; {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            &#8377;{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <p>
            Grey self-design slim-fit formal blazer, has a notched lapel,
            single-breasted with double button closures, long sleeves, double
            vented hem on the back, two flap pockets and one chest welt pocket
          </p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
        </div>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="productdispay-right-category">
          <span>Category :</span>
          Women,T-Shirt, Crop Top
        </p>
        <p className="productdispay-right-category">
          <span>Tags :</span>
          Modern,Latest
        </p>
      </div>
    </div>
  );
};
export default ProductDisplay;
