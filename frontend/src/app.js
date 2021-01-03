import ReactDOM from 'react-dom';
import React from 'react';
import '../../backend/assets/scss/main.scss';
import '../../backend/assets/scss/common.scss';

import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';

import store from './../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; 

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route path="/admin" component={AdminScreen}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
