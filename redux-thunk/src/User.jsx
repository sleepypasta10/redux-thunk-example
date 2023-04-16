import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchUser from './redux/action';

function User() {

    const dispatch = useDispatch()
    const states = useSelector(state => state)
    // console.log(users);

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    const renderUser = () => {
      if (states.loading) {
        return <h2>Loading</h2>
      }
      return states.users.map(item => (
        <h3 key={item.id}>{item.name}</h3>
      ))
    }

  return (
    <div>
      {renderUser()}
      {/* {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))} */}
    </div>
  )
}

export default User
