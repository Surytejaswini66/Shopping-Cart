import React from "react"; 
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
import { 
  CartContainer, 
  CartHeading, 
  CartItemsHeading, 
  SubtotalContainer, 
  HorizontalLine,
  FreeGiftMessage,
  CartContentCard,
  GiftProgressContainer
} from "../styles/CartStyles";
import { THRESHOLD } from "../constants";

const Cart = ({ cart, updateQuantity, removeItem, total }) => {
  const totalItems = cart.length > 0 ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;
  const formattedTotal = total ? total.toFixed(2) : "0.00";

  return (    
    <>
      <CartHeading>Cart Summary</CartHeading>  

      <CartContainer>
        
        <SubtotalContainer>
          <strong>Subtotal:</strong>
          <span>${formattedTotal} ({totalItems} items)</span>
        </SubtotalContainer>

        <HorizontalLine />

       
        <GiftProgressContainer>
          <FreeGiftMessage>
            {total < THRESHOLD ? (
              <>Add ${THRESHOLD - total} more to get a free Wireless Mouse!</>
            ) : (
              <>Congrats You got a free Wireless Mouse!</>
            )}
          </FreeGiftMessage>
          <ProgressBar total={total} />
        </GiftProgressContainer>
      </CartContainer>

      
      <CartItemsHeading>Cart Items</CartItemsHeading>

      <CartContentCard>
  {cart.length === 0 ? (
    <div style={{ textAlign: "center" }}>
      <p style={{ marginBottom: "10px" }}>Your cart is empty</p>
      <p>Add some products to see them here!</p>
    </div>
  ) : (
    cart.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    ))
  )}
</CartContentCard>


    </>
  );
};

export default Cart;