import { useState, useContext, useEffect } from "react";

import { add, remove } from "../../reducers";
import { CartContext, CartDispatchContext } from "../../contexts";
import { Product } from "../../models";

import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";

export const ProductCard = (item: Product) => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const { id, name, imageUrl, price } = item;

  function checkCart(id: number) {
    return cart.some((item: Product) => item.id === id);
  }

  return (
    <Wrapper background={imageUrl}>
      <AddButton
        isInCart={checkCart(id)}
        onClick={() => {
          checkCart(id)
            ? dispatch(remove({ ...item }))
            : dispatch(add({ ...item }));
        }}
      >
        <p>{checkCart(id) ? "−" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
