import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const ADD_USER = gql`
  mutation addUser($uid: String!, $email: String!, $username: String!) {
    addUser(uid: $uid, email: $email, username: $username) {
      username
    }
  }
`

// const GET_USER = gql`
//   query {
//     User {
//       id, uid
//     }
//   }
// `

const Signin = () => {

  // const getUser = useQuery(GET_USER);
  // console.log(getUser.data);

  const [addUser] = useMutation(ADD_USER);

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
    
    addUser({ variables: {
      uid: response.id,
      email: response.email,
      username: response.name
    }});
  }
  
  const componentClicked  = () => {
    console.log('clicked');
  }

  return (
    <>
      <FacebookLogin
        appId="2488076044746781"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </>
  )
}

export default Signin;