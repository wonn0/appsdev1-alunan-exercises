import { useContext } from "react";

import { CartContext } from "../../contexts";

import { ProductsWrapper, Title } from "./Cart.styled";
import { CartProductCard } from "../CartProductCard";

export const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <Title>{!cart.length ? 'No Items in Cart' : 'Your Cart'}</Title>
      <ProductsWrapper>
        {cart.map((data, index) => (
          <CartProductCard
            key={index}
            {...data}
          />
        ))}
      </ProductsWrapper>
    </>
  );
};
