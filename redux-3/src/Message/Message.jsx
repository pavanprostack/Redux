import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {gmAction, gnAction} from '../Redux/message/message.action'


const Message = () => {

    let dispatch = useDispatch();

    let message = useSelector((state)=>{
        return state.message
    })

    let gmHandler = ()=>{
        dispatch(gmAction())
    }

    let gnHandler = ()=>{
        dispatch(gnAction())
    }

  return <>
  <h4>{JSON.stringify(message.msg)}</h4>
  <button onClick={gmHandler}>GM</button>
  <button onClick={gnHandler}>GN</button>
  
  </>
}

export default Message