import React, { useState } from 'react'

const Form = () => {
    const [userName, setUserName] = useState('');
    const [showValue, setShowValue] = useState('');

    const changeUname = (e) => {
        setUserName(e.target.value)
    }

    const clickButton = () => {
        setShowValue(userName);
    }

  return (
    <>
    <div>Form</div>
    <input type='text' name='userName' value={userName} onChange={changeUname} />
    <button type='button' onClick={clickButton}> Show value </button>
    <h3>{showValue} </h3>
    </>
  )
}

export default Form