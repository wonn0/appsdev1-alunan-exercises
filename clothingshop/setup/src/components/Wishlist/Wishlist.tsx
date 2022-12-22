import { useContext } from "react";

import { WishlistContext } from "../../contexts";
import { Product } from "../../models";

import { WishlistWrapper, Title } from "./Wishlist.styled";
import { ProductCard } from "../ProductCard";

export const Wishlist = () => {
  const wishlist = useContext(WishlistContext);

  return (
    <>
      <Title>{!wishlist.length ? 'Your Wishlist is Empty' :  'Your Wishlist'}</Title>
      <WishlistWrapper>
        {wishlist.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </WishlistWrapper>
    </>
  );
};
