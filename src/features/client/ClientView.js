import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, clientNeedChef} from './clientSlice';

const ClientView = () => {
  const clients = useSelector((state) => state.cli.count);
  const dispatch = useDispatch();

  return (
    <div>
        <p> client view - {clients}</p>
        <button onClick={() => dispatch(increment(1))}> client change increment</button>
        <button onClick={() => dispatch(decrement())}> client change decrement</button>
        <button onClick={() => dispatch(clientNeedChef())}> Client needs chefs </button>
    </div>
  )
}

export default ClientView