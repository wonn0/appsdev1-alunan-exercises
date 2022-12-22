import { useReducer } from "react";
import { IconContext } from "react-icons";

import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { Wishlist } from "../Wishlist";

import {
  CartContext,
  CartDispatchContext,
  initialCart,
  initialWishlist,
  WishlistContext,
  WishlistDispatchContext,
} from "../../contexts";
import { cartReducer, wishlistReducer } from "../../reducers";
import { Checkout } from "../Checkout";

export const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    initialWishlist
  );

  return (
    <CartContext.Provider value={cart}>
      <WishlistContext.Provider value={wishlist}>
        <IconContext.Provider value={{ className: "shared-class", size: 16 }}>
          <CartDispatchContext.Provider value={dispatch}>
            <WishlistDispatchContext.Provider value={dispatchWishlist}>
              <Wrapper>
                <TitleWrapper>
                  <h1>Clothing Shop Starter Project</h1>
                </TitleWrapper>
                <LinksWrapper>
                  <Link to="/">Home</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/checkout">Checkout</Link>
                </LinksWrapper>
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Wrapper>
            </WishlistDispatchContext.Provider>
          </CartDispatchContext.Provider>
        </IconContext.Provider>
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};
