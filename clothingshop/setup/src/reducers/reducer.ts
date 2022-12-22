import {
  CartAction,
  CartActionType,
  WishlistAction,
  WishlistActionType,
} from "./actions";
import { Product } from "../models";

export const cartReducer = (state: Product[], action: CartAction) => {
  const temp = state.findIndex((item) => {
    return item.id === action.payload.id;
  });

  switch (action.type) {
    case CartActionType.ADD:
      return [...state, action.payload];

    case CartActionType.REMOVE:
      return state.filter((product) => product.id != action.payload.id);

    case CartActionType.UPDATE:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });

    default:
      return;
  }
};

export const wishlistReducer = (state: Product[], action: WishlistAction) => {
  switch (action.type) {
    case WishlistActionType.ADD:
      return [...state, action.payload];

    case WishlistActionType.REMOVE:
      return state.filter((product) => product.id != action.payload.id);

    default:
      return;
  }
};
