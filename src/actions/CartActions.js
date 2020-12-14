import * as types from '../constants/CartTypes'

export const showCart = ()=>({
    type:types.SHOW_TO_CART,
})

export const addCart = (item)=>({
    type:types.ADD_TO_CART,
    item
})

export const increaseCart = ()=>({
    type:types.INCREASE_TO_CART,
})

export const reduceCart = ()=>({
    type:types.REDUCE_TO_CART,
})



