import React from "react";
import "./product.css";
import PropTypes from "prop-types";
import { generatorID } from "../helpers/generatorID";
import { useAppDispatch } from "../provider/StateProvider";

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

function Product({ title, image, rating, price }) {
  const dispatch = useAppDispatch();

  function helperCreateArray(number) {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(i);
    }
    return result;
  }

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: generatorID(),
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {helperCreateArray(rating).map(() => (
            <p key={generatorID()}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="book clean code" className="product__image" />

      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
