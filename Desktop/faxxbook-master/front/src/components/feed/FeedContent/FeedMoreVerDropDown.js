import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    container: {
        position: "absolute",
        right: 0,
        top: 60
    },
    listItem: {
      cursor: "pointer"
    }
  }));
  
  // function generate(element) {
  //   return [0, 1, 2].map(value =>
  //     React.cloneElement(element, {
  //       key: value,
  //     }),
  //   );
  // }

export default function FeedMoreVerDropDown() {
    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              {
              // generate(
              //   <ListItem>
              //     <ListItemText
              //       primary="Single-line item"
              //     />
              //   </ListItem>,
              // )
              }
              <ListItem className={classes.listItem}>
                <ListItemText>
                  수정하기
                </ListItemText>
                <ListItemText>
                  삭제
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Grid>   
    )
}