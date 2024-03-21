import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './chefSlice';

const ChefView = () => {
  const {count, client} = useSelector((state)=> state.chef);
  const dispatch = useDispatch();

  return (
    <div>
        <p> chef count - {count} </p>
        <p> chef client count - {client} </p>
        <button onClick={() => dispatch(increment(2))}> chef change increment</button>
        <button onClick={() => dispatch(decrement(1))}> chef change decrement</button>
    </div>
  )
}

export default ChefView