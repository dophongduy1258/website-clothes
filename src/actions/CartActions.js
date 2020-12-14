import * as types from '../constants/CartTypes'

export const showCart = ()=>({
    type:types.SHOW_TO_CART,
})

export const addToCart = (item,quantity)=>({
    type:types.ADD_TO_CART,
    item,
    quantity
})


export const IncreaseQuantity = (payload)=>({
    type:types.INCREASE_QUANTITY,
    payload
})
export const DecreaseQuantity = (payload)=>({
    type:types.DECREASE_QUANTITY,
    payload
})


export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}
