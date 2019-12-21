import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  FILTER_BY_PROMO,
  PROMO_REMOVED,
  RESET_FILTERS,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DSC,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DSC
} from "./actionTypes";

//add item to cart
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

//remove item from cart
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

//add quantity in cart
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};

//substract quantity cart
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};

export const filterByPromo = () => {
  return {
    type: FILTER_BY_PROMO
  };
};

export const promoRemoved = () => {
  return {
    type: PROMO_REMOVED
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  };
};

export const sortedByNameASC = () => {
  return {
    type: SORT_BY_NAME_ASC
  };
};

export const sortedByNameDSC = () => {
  return {
    type: SORT_BY_NAME_DSC
  }
};

export const sortedByPriceASC = () => {
  return {
    type: SORT_BY_PRICE_ASC
  }
}

export const sortedByPriceDSC = () => {
  return {
    type: SORT_BY_PRICE_DSC
  }
}