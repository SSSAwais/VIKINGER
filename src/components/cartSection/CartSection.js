import Image from "next/image";
import React from "react";
import "./CartSection.css";
const CartSection = (props) => {
  const { itemname, disp, itemnum, picture, qty } = props;
  return (
    <>
      <div className="cart_item_wrapper">
        <div className="buying_cart">
          <div className="image_area">
            <Image src={picture} alt="" className="img-fluid" />
          </div>
          <div className="items_prices">
            <h4 className="itm_nameee">{itemname}</h4>
            <p className="items_disp">{disp}</p>
            <p className="totalitems">
              <span> $</span>
              {itemnum}x{qty}
            </p>
          </div>
        </div>
        <div className="cancel_icon">
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
    </>
  );
};

export default CartSection;
