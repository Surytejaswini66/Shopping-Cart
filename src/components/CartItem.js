import React from "react";
import {
  CartItemContainer,
  RemoveButton,
  QuantityButton,
  QuantityContainer,
  FreeGiftTag,
  CartItemName,
  CartItemPrice
} from "../styles/CartStyles";
import { FREE_GIFT } from "../constants";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const isFreeGift = item.id === FREE_GIFT.id;

  return (
    <CartItemContainer>
      <div style={{ textAlign: "left" }}>
        <CartItemName>{item.name}</CartItemName>
        {!isFreeGift && (
          <CartItemPrice>
            ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </CartItemPrice>
        )}
      </div>

      <QuantityContainer>
        {!isFreeGift && (
          <>
            <QuantityButton color="red" onClick={() => updateQuantity(item.id, -1)}>-</QuantityButton>
            <span style={{ fontWeight: "bold", margin: "0 2px" }}>{item.quantity}</span>
            <QuantityButton color="green" onClick={() => updateQuantity(item.id, 1)}>+</QuantityButton>
          </>
        )}

        {isFreeGift && <FreeGiftTag>Free Gift</FreeGiftTag>}

        {item.price !== 0 && (
          <RemoveButton onClick={() => removeItem(item.id)}>Remove</RemoveButton>
        )}
      </QuantityContainer>
    </CartItemContainer>
  );
};

export default CartItem;