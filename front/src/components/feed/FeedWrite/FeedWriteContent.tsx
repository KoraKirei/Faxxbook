import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { makeStyles, TextField, Card, CardContent, CardActions, Avatar, Divider, Box, List, ListItem, ListItemAvatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#f5f6f7',
    marginBottom: 13
  },
  cardTitleFont: {
    fontSize: 12
  },
  cardContent: {
    backgroundColor: '#fff',
    padding: 0
  },
  cardAction: {
    backgroundColor: '#fff',
  },
  textField: {
    width: 'inherit'
  },
  cardList: {
    cursor: 'text'
  }
}));

const FeedWriteContent = () => {
  const client = useApolloClient();

  const classes = useStyles();

  const handleClickOpen = () => {
    client.writeData({
      // data 무조건 써야 함.
      data: {
        open: true
      }
    });
  }
  console.log(client)

  return (
    <>
      <Card className={classes.card}>
        <Box m={0.8}>
          <div className={classes.cardTitleFont}>Create Post</div>
        </Box>
        <Divider />
        <CardContent className={classes.cardContent}>
          <List onClick={handleClickOpen}>
            <ListItem className={classes.cardList}>
              <ListItemAvatar>
                <Avatar>
                  R
                </Avatar>
              </ListItemAvatar>
              <TextField
                placeholder="What's on your mind, User?"
                rowsMax='10'
                multiline
                className={classes.textField}
              />
            </ListItem>
          </List>
        </CardContent>
        <Divider />
        <CardActions className={classes.cardAction}>
          Photo/Video
        </CardActions>
      </Card>
    </>
  );  
}

export default FeedWriteContent;