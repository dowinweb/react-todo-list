/**
 * Created by dongwei on 2017/6/6.
 */
import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer
});

export default rootReducer;
