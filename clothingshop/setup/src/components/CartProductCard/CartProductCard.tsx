import { useContext, useEffect } from "react";

import { add, remove, update } from "../../reducers";
import { CartContext, CartDispatchContext } from "../../contexts";
import { Product } from "../../models";

import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  PlusButton,
  QuantityContainer,
  QuantityButtonContainer,
} from "./CartProductCard.styled";

export const CartProductCard = (item: Product) => {
  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);

  const { id, name, imageUrl, price, quantity } = item;

  function checkCart(id: number) {
    return cart.some((item: Product) => item.id === id);
  }

  const addQuantity = () => {
    const tempQuantity = item.quantity + 1;
    const tempItem = {
      ...item,
      quantity: tempQuantity,
    };

    cartDispatch(update(tempItem));
  };

  const subtractQuantity = () => {
    if (quantity === 1) return;

    const tempQuantity = quantity - 1;
    const tempItem = {
      ...item,
      quantity: tempQuantity,
    };

    cartDispatch(update(tempItem));
  };

  return (
    <Wrapper background={imageUrl}>
      <AddButton
        isInCart={checkCart(id)}
        onClick={() => {
          checkCart(id)
            ? cartDispatch(remove({ ...item }))
            : cartDispatch(add({ ...item }));
        }}
      >
        <p>{checkCart(id) ? "−" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <QuantityContainer>
          <SubTitle>Quantity Ordered: {quantity}</SubTitle>
          <QuantityButtonContainer>
            <PlusButton isInCart={checkCart(id)} onClick={addQuantity}>
              <p>+</p>
            </PlusButton>
            <PlusButton isInCart={checkCart(id)} onClick={subtractQuantity}>
              <p>-</p>
            </PlusButton>
          </QuantityButtonContainer>
        </QuantityContainer>
        <SubTitle>Total Price: {price * quantity}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
