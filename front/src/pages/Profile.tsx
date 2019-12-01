import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {

  const { uid } = useParams();
  console.log(uid)

  return (
    <>
      {uid}
    </>
  )
}

export default Profile;