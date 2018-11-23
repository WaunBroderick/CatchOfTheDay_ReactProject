import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Match, Miss } from 'react-dom';

import './css/style.css';
import App from "./components/App";

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return(
            <BrowserRouter>
            <div>
            <Match exactly pattern ="/" component={StorePicker} />
            <Match pattern="/store/:storeId" component={App}/>
            <Miss component={NotFound}/>
            </div>
            </BrowserRouter>
    )
}

render (<Root/>, document.querySelector('#main'));