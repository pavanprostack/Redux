import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../Redux/counter/counter.action'


const Counter = () => {

  let dispatch = useDispatch();

  let counter = useSelector((state)=>{
    return state
  })

   let decrHandler = ()=>{
    dispatch(decrAction())
   }

   let incrHandler =()=>{
    dispatch(incrAction())
   }

  return<>
  <h4>QTY:{JSON.stringify(counter.qty)}</h4>
  <button onClick={decrHandler}>Decr</button>
  <button onClick={incrHandler}>Incr</button>
  </> 
  
}

export default Counter
