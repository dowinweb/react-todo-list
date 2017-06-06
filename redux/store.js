/**
 * Created by dongwei on 2017/6/5.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';


 // TODO: add middleware 添加中间件

let finalCreateStore = compose(
    applyMiddleware(createLogger())
)(createStore);



export default function configureStore(initialState = {todos: []}){
    // initialState = initialState || {todos:[]}
    return finalCreateStore(reducer, initialState);
}