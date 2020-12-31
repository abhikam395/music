import ReactDOM from 'react-dom';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import '../../backend/assets/scss/main.scss';
import '../../backend/assets/scss/common.scss';

import store from './../store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <HomeScreen/>
    </Provider>,
    document.getElementById('app')
);
