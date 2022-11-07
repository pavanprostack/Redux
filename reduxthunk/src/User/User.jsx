import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsersAction} from '../Redux/Users/user.action'

const User = () => {

    let dispatch = useDispatch()
    let users = useSelector((state)=>{
        return state
    })

    useEffect(()=>{
        dispatch(fetchUsersAction())
    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <table className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(users).length > 0 ? <>
                                    {
                                        users.users.map((user) => {
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

export default User