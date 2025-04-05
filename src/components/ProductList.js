import React from "react";
import ProductItem from "./ProductItem";
import { ProductContainer, ProductHeading } from "../styles/ProductStyles";

const ProductList = ({ products, addToCart }) => {
  return (
    <>
     
      <ProductHeading>Products</ProductHeading>

      <ProductContainer>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ProductContainer>
    </>
  );
};

export default ProductList;