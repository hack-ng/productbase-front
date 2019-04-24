import { combineReducers } from 'redux'
import productsReducer from "./products"
import authReducer from "./auth"

const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer,
})

export default rootReducer