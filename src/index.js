import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/appReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

var store = createStore(reducer,applyMiddleware(thunk));

//console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
