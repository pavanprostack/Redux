import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { wishAction, joshAction } from '../Redux/Message2/message2.action';

const Message2 = () => {

    let dispatch = useDispatch();

    let message = useSelector((state)=>{
        return state.message2
    })

    let wishHandler =()=>{
        dispatch(wishAction())
    }

    let joshHandler = ()=>{
        dispatch(joshAction())
    }
  return <>
  <div className="container">
    <div className="row">
        <div className="col-6">
            <h4>{JSON.stringify(message.message)}</h4>
            <button onClick={wishHandler}>WISH</button>&nbsp;
            <button onClick={joshHandler}>JOSH</button>
        </div>
    </div>
  </div>
  </>
}

export default Message2
