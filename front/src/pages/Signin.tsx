import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const USER_LOGIN = gql`
  mutation userLogin($id: String!, $email: String!, $username: String!) {
    userLogin(id: $id, email: $email, username: $username) {
      username
    }
  }
`

const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id, username, email
    }
  }
`

const Signin = () => {

  const getUser = useQuery(GET_USER, {
    variables: {
      id: "180883496377088"
    }
  });
  console.log(getUser.data);

  const [userLogin] = useMutation(USER_LOGIN);

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    userLogin({ variables: {
      id: response.id,
      email: response.email,
      username: response.name,
    }});
  }
  
  // const componentClicked  = () => {
  //   console.log('clicked');
  // }

  return (
    <>
      <FacebookLogin
        appId="2488076044746781"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </>
  )
}

export default Signin;