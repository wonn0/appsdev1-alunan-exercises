import { useContext } from "react";

import { CartContext } from "../../contexts";
import { Product } from "../../models";

import { ProductsWrapper, Title } from "./Checkout.styled";
import { CheckoutCard } from "../CheckoutCard";

export const Checkout = () => {
  const cart = useContext(CartContext);

  const getTotal = (cart: Product[]) => {
    var res = 0;

    cart.map((item: Product) => {
      const { price, quantity } = item;
      res += price * quantity;
    });

    return res;
  };

  return (
    <>
      <Title>
        {!cart.length
          ? "No Items to Checkout"
          : `Your cart total is ${getTotal(cart)}.00$`}
      </Title>
      <ProductsWrapper>
        {cart.map((data, index) => (
          <CheckoutCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
