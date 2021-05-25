import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useAppState } from "../../provider/StateProvider";
import { getBasketTotal } from "../../provider/reducer";

SubTotal.propTypes = {};

function SubTotal() {
  const { basket } = useAppState();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="subtotal__giftInput" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
