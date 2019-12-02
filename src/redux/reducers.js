import Products from '../Data/Products.json'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/actionTypes'
import shippingCost from '../components/features/Total/ShipppingCost'

const initState = {
    items: Products, // this is a .json file in data/Products
    addedItems:[],
    total: 0,
    quantity: 0
}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE Products COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         console.log('item added to cart')
         if(existed_item)
         {
            addedItem.quantity += 1 // does not update quantity in cart
             return{
                ...state,
                 total: state.total + addedItem.price,
                 //quantity: state.quantity + 1 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                //quantity: state.quantity + 1
            }  
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          console.log(newTotal);
          console.log(addedItem.quantity);
          return{
              ...state,
              total: newTotal,
              quantity: state.quantity + 1
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            console.log(newTotal);
            console.log(addedItem.quantity);
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                quantity: state.quantity - 1
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            console.log(newTotal);
            console.log(addedItem.quantity);
            return{
                ...state,
                total: newTotal,
                //quantity: state.quantity - 1
            }
        }   
    }

    if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + shippingCost 
        }
    }

    if(action.type=== SUB_SHIPPING){
      return{
          ...state,
          total: state.total - shippingCost
        }
    }

    else {
        return state
    }
    
}

export default cartReducer;