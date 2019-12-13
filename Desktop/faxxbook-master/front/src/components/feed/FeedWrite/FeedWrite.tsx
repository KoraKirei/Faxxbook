import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import FeedWriteContent from './FeedWriteContent';
import FeedWriteDialog from './FeedWriteDialog';

const GET_OPEN = gql`
  {
    open @client
  }
`;

const FeedWrite = () => {

  const { data } = useQuery(GET_OPEN);
  return (
    <>
      <FeedWriteContent />
      <FeedWriteDialog open={data.open} />
    </>
  );
}

export default FeedWrite;