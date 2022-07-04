import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from 'axios'
import ShoeCard from './ShoeCard/ShoeCard';


const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((store) => store.shoes)
  const getshoes = () => {
    dispatch(getShoesRequest())
    axios.get("http://localhost:8080/shoes")
      .then((res) => dispatch(getShoesSuccess(res.data)))
      .catch((error) => dispatch(getShoesFailure()));
  }
  useEffect(() => {
    if (shoes?.length === 0) { getshoes() }
  })
  return (
    <div>
      {shoes?.map((item,index) => {
        return <ShoeCard item={item} key={index} />
        

        

      })

      }

    </div>
  )
};

export default Shoes;
