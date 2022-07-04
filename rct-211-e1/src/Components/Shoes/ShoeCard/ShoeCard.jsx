import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getShoesSuccesscount } from "../../../Redux/action";

const ShoeCard = ({item,index}) => {
  const dispatch=useDispatch()
  const shoeId = item.id
  
const handleupdate=(item,newcount)=>{
  let payload={id:item.id,name:item.name,image:item.image,cart_quantity:newcount}
  dispatch(getShoesSuccesscount(payload))

  axios.patch(`http://localhost:8080/shoes/${item.id}`,{cart_quantity: newcount})
  .then((res)=>console.log())
  .catch((error)=>console.error(error));
}

  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <img data-cy="shoe-card-image" alt="shoe"  src={item.image}/>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{item.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button" onClick={()=>handleupdate(item,item.cart_quantity+1)}>+</button>
          <button data-cy="decrement-shoe-count-button" onClick={()=>handleupdate(item,item.cart_quantity-1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
