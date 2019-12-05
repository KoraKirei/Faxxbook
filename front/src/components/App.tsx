import React from 'react';
import { Route, Switch } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Header from './base/Header';
import {
  Home,
  Profile,
  Messenger,
  FindFriends,
  Pages,
  Groups,
} from '../pages';
import Signin from './signin';

const GET_USER = gql`
  {
    user @client {
      id, email, username, qnaPoint, profilePhotoUrl, coverPhotoUrl
    }
  }
`;

const App = () => {
  const { data } = useQuery(GET_USER);
  if(!data.user) {
    return(
      <Signin />
    )
  }

  return (
    <div style={{ backgroundColor: '#e9ebee' }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={Messenger} />
        <Route exact path="/find-friends" component={FindFriends} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/groups" component={Groups} />
        <Route path="/profile/:uid" component={Profile} />
      </Switch>
    </div>
  );

}

export default App;