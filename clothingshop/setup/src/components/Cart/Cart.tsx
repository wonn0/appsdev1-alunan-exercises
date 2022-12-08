import { useContext } from "react";

import { CartContext } from "../../contexts";
import { Product } from "../../models";

import { ProductsWrapper, Title } from "./Cart.styled";
import { ProductCard } from "../ProductCard";

export const Cart = () => {
  const cart = useContext(CartContext);

  const getTotal = (cart: Product[]) => {
    var res = 0;

    cart.map((item: Product) => {
      const { price } = item;
      res += price;
    });

    return res;
  };

  return (
    <>
      <Title>Your cart total is {getTotal(cart)}.00$</Title>
      <ProductsWrapper>
        {cart.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
