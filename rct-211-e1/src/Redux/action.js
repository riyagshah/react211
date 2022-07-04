//Create ActionCreator functions here
import * as types from "./actionTypes.js"
export const getShoesRequest=()=>{
    return {type:types.GET_SHOES_REQUEST}
}
export const  getShoesFailure=()=>{
    return {type:types.GET_SHOES_FAILURE}
}
export const getShoesSuccess=(payload)=>{
    return {type:types.GET_SHOES_SUCCESS,payload}
}
export const getShoesRequestcount=()=>{
    return {type:types.UPDATE_SHOE_COUNT_REQUEST}
}
export const  getShoesFailurecount=()=>{
    return {type:types.UPDATE_SHOE_COUNT_FAILURE}
}
export const getShoesSuccesscount=(payload)=>{
    return {type:types.UPDATE_SHOE_COUNT_SUCCESS,payload}
}