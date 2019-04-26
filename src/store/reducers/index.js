import { combineReducers } from 'redux'
import productsReducer from "./products"
import authReducer from "./auth"
import entriesReducer from "./entries"
import apikeysReducer from "./apikeys"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["products", "entries"]
};

const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer,
    entries: entriesReducer,
    apikeys: apikeysReducer,
})

const pReducer = persistReducer(persistConfig, rootReducer);



export default pReducer