import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles, Grid, Card, CardMedia, Box } from '@material-ui/core';

import ChatBar from '../components/base/ChatBar'

const useStyles = makeStyles(() => ({
  card: {
    // maxHeight: '345px'
  },
  media: {
    width: window.screen.width,
    height: '300px',
    paddingTop: '56.25%'
  }
}));

const Profile = () => {
  const classes = useStyles();

  const { uid } = useParams();

  return (
    <Grid container>
      <Grid item xs={10}>
        <Box m={1.5}>
        <Card
          className={classes.card}
        >
          <CardMedia
            className={classes.media}
            image="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-0/p180x540/78395055_190129938785777_6099981203983564800_o.jpg?_nc_cat=110&_nc_ohc=m34MKtlLuSwAQkIMJZey-wCW8Toz8H5XURHK0KKJVRuUHjVnaJzn7BKHQ&_nc_ht=scontent-icn1-1.xx&oh=42d471dccd8d4cd2adbe120cb48a2cbf&oe=5E725708"
          />
        </Card>
      </Box>
      </Grid>
      <Grid item xs={10}/>

        
      <ChatBar />
    </Grid>
  )
}

export default Profile;