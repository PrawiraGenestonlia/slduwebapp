import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import dataVisualisationHomePage from './datavisualisation/dataVisualisationHomePage';
import oldDataVisualisationHomePage from './datavisualisation/DataVizHome';
import HomePage from './UI/Pages/HomePage';
import SearchPage from './UI/Pages/SearchPage';
import UploadFiles from './UI/Pages/UploadFiles';
import ViewFiles from './UI/Pages/ViewFiles';
import StudentProfileContent from './UI/ComponentContents/StudentProfileContent';
import ComparisonPage from './UI/Pages/ComparisonPage'

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dataVisualisation' component={dataVisualisationHomePage} />
            <Route exact path='/olddataVisualisation' component={oldDataVisualisationHomePage} />
            <Route exact path='/Search' component={SearchPage} />
            <Route exact path='/UploadFiles' component={UploadFiles} />
            <Route exact path='/ViewFiles' component={ViewFiles} />
            <Route exact path='/StudentProfile' component={StudentProfileContent} />
            <Route exact path='/Comparison' component={ComparisonPage} />
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
