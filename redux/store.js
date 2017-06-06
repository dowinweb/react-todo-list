/**
 * Created by dongwei on 2017/6/5.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


 // TODO: add middleware 添加中间件

let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore);



export default function configureStore(initialState = {todos: [], user:{}}){
    // initialState = initialState || {todos:[]}
    return finalCreateStore(rootReducer, initialState);
}