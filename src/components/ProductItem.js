import React from "react";
import { ProductCard, Button } from "../styles/ProductStyles";

const ProductItem = ({ product, addToCart, style }) => {
  return (
    <div style={style}>
      <ProductCard>
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <Button onClick={() => addToCart({ ...product, quantity: 1 })}>
          Add to Cart
        </Button>
      </ProductCard>
    </div>
  );
};

export default ProductItem;