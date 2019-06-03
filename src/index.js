import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactAppDefault from './App';
import dataVisualisationHomePage from './datavisualisation/dataVisualisationHomePage';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={ReactAppDefault} />
            <Route exact path='/dataVisualisation' component={dataVisualisationHomePage} />
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
