import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import "./global.css";
import {AuthProvider} from "./contexts/AuthContext";

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
