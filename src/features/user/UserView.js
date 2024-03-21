import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

const UserView = () => {
    const {loading, users, error} = useSelector((state) => state.user);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

  return (
    <div>
        <p> List of users: </p>
        {loading && <div> Loading... </div>}
        {!loading && error ? <p> Error: {error} </p> : null}
        {!loading && users.length ? (
            <ul>
                {users.map(user => (
                    <li> {user.name} </li>
                ))}
            </ul>
        ) : null }
    </div>
  )
}

export default UserView