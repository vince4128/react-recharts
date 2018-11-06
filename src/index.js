import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Root from './Root';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" render={({ match }) => <App match={match} /> } />
        </BrowserRouter>
    </Root>
    ,document.getElementById('root')
);