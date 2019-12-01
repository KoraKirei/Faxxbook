import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { Dashboard, Chat, Flag, Group } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'unset'
  },
}));

const LeftBar = () => {

  const classes = useStyles();
  
  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div">
        Navigation
      </ListSubheader>
    }
  >
    <Link
      to="/"
      className={classes.link}
    >
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="News Feed" />
      </ListItem>
    </Link>
    <Link 
      to="/messages"
      className={classes.link}
    >
      <ListItem button>
        <ListItemIcon>
          <Chat />
        </ListItemIcon>
        <ListItemText primary="Messenger" />
      </ListItem>
    </Link>
    <Link
      to="/pages"
      className={classes.link}
    >
      <ListItem button>
        <ListItemIcon>
          <Flag />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItem>
    </Link>   
    <Link
      to="/groups"
      className={classes.link}
    >
      <ListItem button>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>
    </Link>
  </List>
  )
}

export default LeftBar;