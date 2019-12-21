import Products from "../Data/Products.json";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  FILTER_BY_PROMO,
  PROMO_REMOVED,
  RESET_FILTERS,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DSC,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DSC
} from "../actions/actionTypes";
import shippingCost from "../components/features/Total/ShipppingCost";

const initState = {
  items: Products, // this is a .json file in data/Products
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE Products COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    console.log("item added to cart");
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    console.log(newTotal);
    console.log(addedItem.quantity);
    return {
      ...state,
      addedItems: [...state.addedItems],
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      console.log(newTotal);
      console.log(addedItem.quantity);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      console.log(newTotal);
      console.log(addedItem.quantity);
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + shippingCost
    };
  }

  if (action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - shippingCost
    };
  }

  if (action.type === FILTER_BY_PROMO) {
    let filteredPromos = initState.items.filter(x => x.extra === "promo");
    console.log(initState.items);
    console.log(filteredPromos);
    let notEmpty = state.items.length !== Products.length;
    if (notEmpty) {
      return {
        ...state,
        items: [...state.items, ...filteredPromos]
      };
    }
    return {
      ...state,
      items: [...filteredPromos]
    };
  }

  if (action.type === PROMO_REMOVED) {
    let promoRemoved = state.items.filter(x => x.extra !== "promo");
    let Empty =
      state.items.length ===
      state.items.filter(x => x.extra === "promo").length;
    if (Empty) {
      return {
        ...state,
        items: initState.items
      };
    }
    return {
      ...state,
      items: promoRemoved
    };
  }
  if (action.type === RESET_FILTERS) {
    var sortedById = initState.items.sort((a, b) => a.id - b.id);
    return {
      ...state,
      items: sortedById
    };
  }

  if (action.type === SORT_BY_NAME_ASC) {
    let sortedByNameASC = initState.items.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    console.log(sortedByNameASC);
    return {
      ...state,
      items: [...sortedByNameASC]
    };
  }

  if (action.type === SORT_BY_NAME_DSC) {
    let sortedByNameDSC = initState.items.sort((a, b) =>
      b.name > a.name ? 1 : -1
    );
    console.log(sortedByNameDSC);
    return {
      ...state,
      items: [...sortedByNameDSC]
    };
  }
  
  if (action.type === SORT_BY_PRICE_ASC) {
    let sortedByPriceASC = initState.items.sort((a, b) =>
      a.price > b.price ? 1 : -1,
    );
    console.log(sortedByPriceASC);
    return {
      ...state,
      items: [...sortedByPriceASC]
    };
  }

  if (action.type === SORT_BY_PRICE_DSC) {
    let sortedByPriceDSC = initState.items.sort((a, b) =>
      b.price > a.price ? 1 : -1
    );
    console.log(sortedByPriceDSC);
    return {
      ...state,
      items: [...sortedByPriceDSC]
    };
  }

  return state;
};

export default cartReducer;
