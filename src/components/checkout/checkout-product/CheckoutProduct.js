import React from "react";
import PropTypes from "prop-types";
import { generatorID } from "../../helpers/generatorID";
import "./checkoutProduct.css";
import { useAppDispatch } from "../../provider/StateProvider";

function CheckoutProduct({ id, image, price, rating, title }) {
  const dispatch = useAppDispatch();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="title" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(0)
            .map(() => (
              <p key={generatorID()}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CheckoutProduct;
