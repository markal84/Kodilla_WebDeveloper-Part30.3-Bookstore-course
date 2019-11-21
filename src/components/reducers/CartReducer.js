

import Products from '../../Data/Products.json'

const initState = {
    items: Products, // this is a .json file in data/Products
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;