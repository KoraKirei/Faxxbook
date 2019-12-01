import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { makeStyles, Dialog, Card, List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';

import FeedWriteContent from './FeedWriteContent';

const useStyles = makeStyles(() => ({
  postButton: {
    backgroundColor: '#4267b2',
    color: '#fff',
    "&:hover": {
      backgroundColor: "#2851A3"
  }
  }
}));

interface props {
  open: boolean
}

const FeedWriteDialog: React.FC<props> = ({ open }) => {
  const client = useApolloClient();

  const classes = useStyles();

  const handleClose = () => {
    client.writeData({
      data: {
        open: false
      }
    });
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='xs'>
      <FeedWriteContent />
      <Card>
        <List>
          <ListItem>
            <Button>
              <ListItemAvatar>
                <AddComment />
              </ListItemAvatar>
              <ListItemText>
                News Feed
              </ListItemText>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <ListItemAvatar>
                <AddComment />
              </ListItemAvatar>
              <ListItemText>
                Your Story
              </ListItemText>
            </Button>
          </ListItem>
          <ListItem>
            <Button color='primary' fullWidth className={classes.postButton}>Post</Button>
          </ListItem>
        </List>
      </Card>
    </Dialog>
  );
}

export default FeedWriteDialog;