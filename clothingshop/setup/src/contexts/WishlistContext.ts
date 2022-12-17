import { createContext, type Dispatch } from "react";

import { WishlistAction } from "../reducers";
import { Product } from "../models";

export const initialWishlist: Product[] = [];
export const initialWishlistDispatch: Dispatch<WishlistAction> = () => {};

export const WishlistContext = createContext(initialWishlist);
export const WishlistDispatchContext = createContext(initialWishlistDispatch);
