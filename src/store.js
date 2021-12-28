import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers=combineReducers({

})

const initialState={};

const middleware=[thunk];

const store=createStore(reducers,initialState,applyMiddleware(...middleware));

export default store