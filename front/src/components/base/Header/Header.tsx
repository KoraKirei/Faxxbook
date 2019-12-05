import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { makeStyles, AppBar, Toolbar, CssBaseline, TextField, Avatar, Button } from '@material-ui/core';
import { Facebook, Search, Help, Notifications, Message, People } from '@material-ui/icons';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#4267b2"
  },
  textField: {
    background: "#fff",
    width: 393
  },
  textFieldInput: {
    height: 26
  },
  searchIcon: {
    color: "#4b4f56"
  },
  searchAvatar: {
    marginRight: 40,    
    width: 26,
    height: 26,
    backgroundColor: "#f5f6f7"
  },
  userAvatar: {
    marginRight: 5,
    width: 25,
    height: 25,
  },
  profileButton: {
    color: '#fff',
    fontSize: '12px'
  },
  link: {
    textDecoration: 'none',
    color: 'unset'
  },
  logoLink: {
    marginTop: '5px',
    textDecoration: 'none',
    color: 'unset'    
  },
  homeButton: {
    color: '#fff',
    fontSize: '12px'
  },
  findFriendButton: {
    color: '#fff',
    fontSize: '12px'
  },
  createButton: {
    color: '#fff',
    fontSize: '12px',
    marginRight: '10px'
  },
  logo: {
    marginTop: '5px'
  },
  icon: {
    marginRight: '15px',
    fontSize: '24px',
    color: '#1a2947'
  }
}));

const GET_USER = gql`
  {
    user @client {
      profilePhotoUrl, coverPhotoUrl, id
    }
  }
`;

const Header: React.FC<{}> = () => {
  const { data } = useQuery(GET_USER);
  const { user } = data;
  const classes = useStyles();

  return(
    <>
      <CssBaseline />
      <AppBar 
        position="static"
        className={classes.appbar}
      >
        <Toolbar variant="dense">
          <Link to="/" className={classes.logoLink}><Facebook fontSize="large"></Facebook></Link>
          <TextField
            variant="outlined"
            placeholder="Search"
            className={classes.textField}
            InputProps={{
              className: classes.textFieldInput
            }}
          />
          <Link to={"/profile/" + user.id} className={classes.link}>
            <Button className={classes.profileButton}>
              <Avatar className={classes.userAvatar} src={user.profilePhotoUrl}>J</Avatar>
              종호
            </Button>
          </Link>
          <Link to="/" className={classes.link}><Button className={classes.homeButton}>Home</Button></Link>
          <Link to="/find-friends" className={classes.link}><Button className={classes.findFriendButton}>Find Friends</Button></Link>
          <Button className={classes.createButton}>Create</Button>
          <People className={classes.icon} />
          <Message className={classes.icon} />
          <Notifications className={classes.icon} />
          <Help className={classes.icon} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;