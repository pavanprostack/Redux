import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pandiAction, pavanAction } from '../Redux/Product2/product2.action';


const Product2 = () => {

    let dispatch = useDispatch();
    let product = useSelector((state)=>{
        return state.product2              // In This Line Product2 is from combineReducer.
    })
    
    let decrHandler =()=>{
        dispatch(pavanAction())
    }
    
    let incrHandler = ()=>{
        dispatch(pandiAction())
    }

  return <>
  <div className="container">
    <div className="row">
        <div className="col-6">
            <table className='table table-hover'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button onClick={decrHandler}>-</button>{product.qty}<button onClick={incrHandler}>+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default Product2
