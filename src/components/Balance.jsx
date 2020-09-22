import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const balance = useSelector((state) => state.banking.balance)
    console.log(balance)
    const store = useSelector(state => state) //useSelector hook- it return which part of state we want
    console.log("store:", store);
    return (
        <div>
          <h1>${balance}</h1>  
        </div>
    )
}


export default Balance;