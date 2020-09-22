import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {deposit, withdraw, collectInterest, deleteAccount, toggleAccount} from '../actions/bankingAction'

const Banking = () => {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    
    const handleDeposit = () =>{
        dispatch(deposit(amount))
    }
    const handleWithdrawal = () =>{
        dispatch(withdraw(amount))
    }
    const handleCollectInterest = () =>{
        dispatch(collectInterest(amount))
    }
    const handleDelete = () =>{
        dispatch(deleteAccount())
    }
    const handleAmountChange = () =>{
        dispatch(toggleAccount())
    }
    return (
        <div className="form-group">
        <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control" />
        <button onClick={handleDeposit} type="button" className="btn btn-primary">deposit</button>
        <button onClick={handleWithdrawal} type="button" className="btn btn-secondary">withdraw</button>
        <button onClick={handleCollectInterest} type="button" className="btn btn-success">collect interest</button>
        <button onClick={handleDelete} type="button" className="btn btn-danger">delete account</button>
        <button onClick={handleAmountChange} type="button" className="btn btn-warning">change account type</button>
        </div>
    )
}

export default Banking;