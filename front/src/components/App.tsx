import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './base/Header';
import {
  Home,
  Profile,
  Messenger,
  FindFriends,
  Pages,
  Groups,
  Signin
} from '../pages';

const App = () => (
  <div style={{ backgroundColor: '#e9ebee' }}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/messages" component={Messenger} />
      <Route exact path="/find-friends" component={FindFriends} />
      <Route exact path="/pages" component={Pages} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/signin" component={Signin} />
      <Route path="/profile/:uid" component={Profile} />
    </Switch>
  </div>
);

export default App;