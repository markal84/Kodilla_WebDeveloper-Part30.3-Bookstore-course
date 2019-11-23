import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './actionTypes'

//add item to cart
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
}

//remove item from cart
export const removeItem= (id)=>{
    return{
        type: REMOVE_ITEM,
         id }
}

//add quantity in cart
export const addQuantity= (id)=>{
    return{
        type: ADD_QUANTITY,
         id }
}

//substract quantity cart
export const subtractQuantity= (id)=>{
    return{
        type: SUB_QUANTITY,
         id }
}
