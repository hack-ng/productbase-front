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

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user", "token"]
};

const apikeysPersistConfig = {
  key: "apikeys",
  storage: storage,
  whitelist: ["apikeys"]
};

const rootReducer = combineReducers({
    products: productsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    entries: entriesReducer,
    apikeys: persistReducer(apikeysPersistConfig, apikeysReducer),
})

const pReducer = persistReducer(persistConfig, rootReducer);



export default pReducer