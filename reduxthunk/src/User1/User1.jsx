import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUserData} from '../Redux/User1/user1.action'

const User1 = () => {

    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserData())
    }, [])

    let users1 = useSelector((state)=>{
        return state.user1
    })
  return <>
  <div className="container">
    <pre>{JSON.stringify(users1)}</pre>
    <div className="row">
        <div className="col-6">
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(users1).length>0 ? <>
                        {
                            users1.users.map((user)=>{
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                        </> : null
                    }
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default User1