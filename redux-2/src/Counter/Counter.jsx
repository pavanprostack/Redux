import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrAction, incrAction } from '../Redux/counter/counter.action'

const Counter = () => {

    let dispatch = useDispatch()

    let counter = useSelector((state)=>{
        return state
    })

   let decrHandler = ()=>{
    dispatch(decrAction())
   }

   let incrHandler = ()=>{
    dispatch(incrAction())
   }

  return <>
  <div className="container mt-5">
    <div className="row">
        <div className="col-8">
            <table className='table table-hover'>
                <thead className='bg-primary'>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{counter.name}</td>
                        <td>{counter.price}</td>
                        {/* <td>{(counter.qty<=0)?<i className='fa fa-minus-circle' onClick={decrHandler}></i>:<i className='fa fa-minus-circle' onClick={decrHandler}></i>} {counter.qty} <i className='fa fa-plus-circle' onClick={incrHandler}></i></td> */}
                        <td><i className='fa fa-minus-circle' onClick={decrHandler}></i> {counter.qty} <i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                        <td>{counter.price * counter.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default Counter
