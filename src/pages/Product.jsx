import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Outlet, useParams } from "react-router-dom";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RealtedProducts from "../Components/RelatedProducts/RealtedProducts";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <RealtedProducts />
      {/* <Outlet /> */}
    </div>
  );
};
export default Product;
