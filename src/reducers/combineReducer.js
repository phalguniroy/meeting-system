import {combineReducers} from 'redux'

import { bankingReducer } from './bankingReducer'
import { authReducer} from './authReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer
})

// store will look like:

// store = {
//     auth =  {
//         isLoggedIn: false
//     },
//     banking = {
//         balance: 0,
//         isSavingAccount: false
//     }
// }