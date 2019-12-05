import React, { useState, useEffect } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import gql from 'graphql-tag';
import { useApolloClient, useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';

// Schema
const USER_LOGIN = gql`
  mutation loginUser($id: ID!, $email: String!, $username: String!) {
    loginUser(id: $id, email: $email, username: $username) {
      username
    }
  }
`

const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id, email, username, qnaPoint, profilePhotoUrl, coverPhotoUrl
    }
  }
`

const Signin = () => {

  const [id, setId] = useState<string>();

  const client = useApolloClient();

  const { data } = useQuery(GET_USER, {
    variables: { id }
  });

  if(data) {
    let user = data.getUser
    client.writeData({
      data: {
        user: user
      }
    });
  }
  
  const [loginUser] = useMutation(USER_LOGIN);

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    loginUser({ variables: {
      id: response.id,
      email: response.email,
      username: response.name,
    }});
    setId(response.id);
  }
  
  return (
    <>
      <FacebookLogin
        appId="2488076044746781"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </>
  )
}

export default Signin;