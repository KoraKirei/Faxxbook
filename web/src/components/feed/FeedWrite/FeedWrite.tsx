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

const GET_FEED = gql`
  {
    tbContent {
      userId, conTitle, conBody, conRegDt
    }
  }
`

const FeedWrite = () => {
  const feed = useQuery(GET_FEED);

  const { data } = useQuery(GET_OPEN);
  return (
    <>
      <FeedWriteContent />
      <FeedWriteDialog open={data.open} />
    </>
  );
}

export default FeedWrite;