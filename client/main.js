import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import NotFound from './components/NotFound';
import App from './components/App';
import Company from './components/Company';
import Images from './components/Images';
import Bids from './components/Bids';
import Payment from './components/Payment';
import Confirm from './components/Confirm';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/company" component={Company} />
    <Route path="/images" component={Images} />
    <Route path="/bids" component={Bids} />
    <Route path="/payment" component={Payment} />
    <Route path="/confirm" component={Confirm} />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('app')
);
