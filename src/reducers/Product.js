import {
    FETCH_PRODUCT,
    ADD_TO_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_CART
} from '../constants/ProductTypes'

// var data = JSON.parse(localStorage.getItem('CART'));
// var Carts = data ? data : [];
const intitalState = {
    numberCart : 0,
    Carts: [],
    _products : []
};


const productReducer = (state = intitalState,action)=>{
    switch(action.type){
        
        case FETCH_PRODUCT :
            state._products = action.products
            return {...state}
            
        case ADD_TO_CART :
            if(state.numberCart == 0){
                let cart  = {
                    _id : action.payload._id,
                    name : action.payload.name,
                    price : action.payload.price,
                    quantity:1,
                    image : action.payload.image,
                    status : action.payload.status,
                    description : action.payload.description
                };
                state.Carts.push(cart);
                // localStorage.setItem('CART',JSON.stringify(state.Carts));
            }else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item._id == action.payload._id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        _id : action.payload._id,
                        name : action.payload.name,
                        price : action.payload.price,
                        quantity:1,
                        image : action.payload.image,
                        status : action.payload.status,
                        description : action.payload.description
                    }
                    state.Carts.push(_cart);
                    // localStorage.setItem('CART',JSON.stringify(state));
                }
            }
            return{
                ...state,
                numberCart:state.numberCart + 1
            }


            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
               
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
               
                return{
                    ...state
                }

            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                if(action.payload){

                }
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item._id!=state.Carts[action.payload]._id
                    })              
                }
                
 


        default:return {...state}
    }
}


export default productReducer;







