
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import App from '../components/App'


let initialState = {
    todos: [{
        id:0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }
    ]    
};

let store = configureStore(initialState);

//configure and create our store 在这个位置创建store并传下去



render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
)
