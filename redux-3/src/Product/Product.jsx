import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrAction, incrAction } from '../Redux/Product/product.action'


const Product = () => {

    let dispatch = useDispatch();

    let product = useSelector((state)=>{
        return state.product
    })

   let decrHandler =()=>{
    dispatch(decrAction())
   }

   let incrHandler= ()=>{
    dispatch(incrAction())
   }

  return <>
  <div className="container mt-5            ">
    {/* <pre>{JSON.stringify(product)}</pre> */}
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
                        <td>{product.product_Name}</td>
                        <td>{product.price}</td>
                        <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty} <i className='fa fa-plus-circle' onClick={incrHandler} ></i></td>
                        <td>{product.price * product.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default Product