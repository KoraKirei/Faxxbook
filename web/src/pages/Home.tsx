import React from 'react';
import { Grid, Box } from '@material-ui/core';

import LeftBar from '../components/base/LeftBar';
import RightBar from '../components/base/RightBar';
import FeedWrite from '../components/feed/FeedWrite';
import FeedContent from '../components/feed/FeedContent';

const Home = () => {

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={5}>
          <Box m={1.5}>
            <FeedWrite />
            <FeedContent />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box m={1.5}>
            <RightBar />
          </Box>
        </Grid>
        <Grid item xs={2}>
          채팅
        </Grid>
      </Grid>
    </>
  );
}

export default Home;