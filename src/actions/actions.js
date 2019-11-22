import { ADD_TO_CART } from './actionTypes'

//add item to cart
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
    }