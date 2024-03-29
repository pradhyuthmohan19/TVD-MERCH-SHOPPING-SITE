import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img OnClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">&#8377;{props.new_price}</div>
        <div className="item-price-old">&#8377;{props.old_price}</div>
      </div>
    </div>
  );
};
export default Items;
