
import {
    ADD_TO_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_CART
} from '../constants/ProductTypes'

// var data = JSON.parse(localStorage.getItem('CART'));
// var Carts = data ? data : [];
const intitalState = []

const productReducer = (state = intitalState,action)=>{
    switch(action.type){
        
        
        case ADD_TO_CART :
            console.log(action)   
            return [...state] 


            // case INCREASE_QUANTITY:
            //     state.numberCart++
            //     state.Carts[action.payload].quantity++;
               
            //    return{
            //        ...state
            //    }
            // case DECREASE_QUANTITY:
            //     let quantity = state.Carts[action.payload].quantity;
            //     if(quantity>1){
            //         state.numberCart--;
            //         state.Carts[action.payload].quantity--;
            //     }
               
            //     return{
            //         ...state
            //     }

            // case DELETE_CART:
            //     let quantity_ = state.Carts[action.payload].quantity;
            //     if(action.payload){

            //     }
            //     return{
            //         ...state,
            //         numberCart:state.numberCart - quantity_,
            //         Carts:state.Carts.filter(item=>{
            //             return item._id!=state.Carts[action.payload]._id
            //         })              
            //     }
                
 


        default:return [...state]
    }
}


export default productReducer;







