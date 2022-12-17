import { useState, useContext, useEffect } from "react";
import { FaRegListAlt } from "react-icons/fa";

import { add, remove, addWishlist, removeWishlist } from "../../reducers";
import {
  CartContext,
  CartDispatchContext,
  WishlistContext,
  WishlistDispatchContext,
} from "../../contexts";
import { Product } from "../../models";

import {
  AddButton,
  WishlistButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  Icon,
} from "./ProductCard.styled";

export const ProductCard = (item: Product) => {
  const cart = useContext(CartContext);
  const wishlist = useContext(WishlistContext);
  const cartDispatch = useContext(CartDispatchContext);
  const wishlistDispatch = useContext(WishlistDispatchContext);

  const { id, name, imageUrl, price } = item;

  function checkCart(id: number) {
    return cart.some((item: Product) => item.id === id);
  }

  function checkWishlist(id: number) {
    return wishlist.some((item: Product) => item.id === id);
  }

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
      <WishlistButton
        isInCart={checkWishlist(id)}
        onClick={() => {
          checkWishlist(id)
            ? wishlistDispatch(removeWishlist({ ...item }))
            : wishlistDispatch(addWishlist({ ...item }));
        }}
      >
        <Icon>
          <FaRegListAlt />
        </Icon>
      </WishlistButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
