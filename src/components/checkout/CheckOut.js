import React from "react";
import "./checkout.css";
import SubTotal from "./subtotal/SubTotal";
import CheckoutProduct from "./checkout-product/CheckoutProduct";
import { useAppState } from "../provider/StateProvider";
import { generatorID } from "../helpers/generatorID";

CheckOut.propTypes = {};

function CheckOut() {
  const { basket, user } = useAppState();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/33/img21/HOTSALE/Master_SIM/HS_LP_BannerDsk_1500x300.jpg"
          alt="amazon payment"
        />

        <div>
          <h3>{user?.email ? user.email : ""}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              id={item.id}
              key={generatorID()}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
