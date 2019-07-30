import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
// import rootReducer from './reducers';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
// const store = createStore(reducer);
// console.log(store.getState());

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
