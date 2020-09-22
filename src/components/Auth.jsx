import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggleAuth} from '../actions/toggleAuth'

const Auth = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleAuth = () =>{
        dispatch(toggleAuth())
    }
    return (
        <div>
        <button type="button" onClick={handleAuth} className="btn btn-primary">{auth.isLoggedIn ? "logedOut" : "logIn"}</button>
        </div>
    )
}

export default Auth;