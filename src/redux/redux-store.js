import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import photosReducer from "./photosReducer";

const reducers = combineReducers({
    form: formReducer,
    photos: photosReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store