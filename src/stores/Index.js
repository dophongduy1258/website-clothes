import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myReducers from '../reducers/myReducer'
import thunk from 'redux-thunk'

const store =  createStore(myReducers,applyMiddleware(thunk));

export default store;