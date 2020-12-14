import * as types from '../constants/ProductTypes'
import apiCaller from '../utils/apiCaller'

export const fetchProductRequest = ()=>{
    return (dispatch)=>{
        return apiCaller('api/Product','GET',null).then(res =>{
            dispatch(fetchProduct(res.data))
        })
    }
}

export const fetchProduct = (products)=>({
    type :types.FETCH_PRODUCT,
    products // [{},...]
})

export const addToCart = (payload,quantity)=>({
    type :types.ADD_TO_CART,
    payload,
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

