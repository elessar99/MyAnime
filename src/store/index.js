import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import itemReducer from "./reducers/bestT/itemReducer";
import keyReducer from "./reducers/bestT/keyReducer";
import sepetReducer from "./reducers/bestT/sepetReducer";

const reducer=combineReducers({
    sepet:sepetReducer,
    item:itemReducer,
    key:keyReducer,
})
const persistConfig={
    key:"root",
    storage,
    version:1,
    whitelist:["sepet"],
    blacklist:["key","item",]
}

const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,applyMiddleware(thunk,logger))
export const persistor=persistStore(store)


export default  reducer
//export default rootReducer