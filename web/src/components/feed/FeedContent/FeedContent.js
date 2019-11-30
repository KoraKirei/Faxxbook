// material ui
import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ReactPlayer from 'react-player';

// custom component
import FeedImgContainer from '../FeedContent/FeedImgContainer'
import FeedMoreVerIconDropDown from './FeedMoreVerDropDown'

export default function RecipeReviewCard() {
  const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        position: "relative"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardContent: {
      padding: 0
    }
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [moreVerOpen, setMoreVerOpen] = React.useState(false);
  
  // 드롭다운 버튼 클릭시 열고 닫음
  const moreVerClick = () => {
    if(moreVerOpen)setMoreVerOpen(false) 
    else setMoreVerOpen(true)
  }

  const contents = {
    object : [
      {
        src:"https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg",
        type:"image"
      },
      {
        src:"https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg",
        type:"image"
      },
      {
        src:"https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg",
        type:"image"
      },
      {
        src:"https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg",
        type:"image"
      },
      {
        src:"https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg",
        type:"image"
      }
    ]
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={moreVerClick}>
            <MoreVertIcon/>
          </IconButton>
        }
        title="변광진"
        subheader="55초 전"
        />
      <CardMedia
        //className={classes.media}
        //image="https://faxx-book.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20191102_111752284.jpg"
        //title="Paella dish"
      >
      <div>
        <ReactPlayer style={{zIndex: '1'}} url="https://faxx-book.s3.ap-northeast-2.amazonaws.com/sample_video.mp4" playing={true} >
        </ReactPlayer>
        <div style={{width:30, zIndex: "1000",background:"red"}}></div>
      </div>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        {
        moreVerOpen?
          <FeedMoreVerIconDropDown moreVerOpen={moreVerOpen}/>
        :
          null
        }
        <FeedImgContainer contents={contents}/>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}