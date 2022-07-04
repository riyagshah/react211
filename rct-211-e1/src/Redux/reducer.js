import * as types from './actionTypes'

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload} = action;
  switch(type)
  {
      case types.GET_SHOES_REQUEST :
        return { ...state,isloading:true}
      

case types.GET_SHOES_SUCCESS:
  return { ...state,isloading:false,shoes:payload}


  case types.GET_SHOES_FAILURE :
    return { ...state,isFailure:true}
    




    case types.UPDATE_SHOE_COUNT_REQUEST :
      return { ...state,isloading:true}
    

case types.UPDATE_SHOE_COUNT_SUCCESS:
  
  const newItems=state.shoes.map((item)=>{
    if(item.id===payload.id)
    {
      return payload
    }
    else
    return item
  })
console.log(newItems)
return { ...state,isloading:false,shoes:newItems}


case types.UPDATE_SHOE_COUNT_FAILURE :
  return { ...state,isFailure:true}
      default:
        return state
};
}
