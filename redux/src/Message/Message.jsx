import React from 'react'
import {gmAction, gnAction} from '../Redux/message/message.action'
import {useDispatch, useSelector} from 'react-redux'

const Message = () => {
  
  let dispatch = useDispatch()              // here we are dispatching an action.

  let message = useSelector((state)=>{           // with the help of use selector we can read store data.
    return state
  })


    let GmHandler= ()=>{
        dispatch(gmAction())
    }
    
    let GnHandler = ()=>{
      dispatch(gnAction())
    }


  return<>
  <h4>{JSON.stringify(message.msg)}</h4>
  <button onClick={GmHandler}>GM</button>
  <button onClick={GnHandler}>GN</button>
  </>
}

export default Message