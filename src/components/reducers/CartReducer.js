

import Products from '../../Data/Products.json'

const initState = {
    items: Products,
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;