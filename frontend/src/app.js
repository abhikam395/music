import ReactDOM from 'react-dom';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import '../../backend/assets/scss/main.scss';
import '../../backend/assets/scss/common.scss';

ReactDOM.render(
    <HomeScreen/>,
    document.getElementById('app')
);
