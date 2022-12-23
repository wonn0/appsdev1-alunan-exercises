import { Product } from "../../models";

import {
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./CheckoutCard.styled";

export const CheckoutCard = (item: Product) => {

  const { name, imageUrl, price, quantity } = item;

  return (
    <Wrapper background={imageUrl}>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>Quantity Ordered: {quantity}</SubTitle>
        <SubTitle>Total Price: {price * quantity}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
