import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

export default function FeedImgContainer(props) {
    const useStyles = makeStyles(theme => ({
      cardContent: {
          padding: 0
      }
    }));

    const classes = useStyles();

    if(props.contents.object.length === 1){
      return (
        <CardContent className={classes.cardContent}>
          <Typography paragraph>이미지가 1개일 때</Typography>
          <img alt="123" className="imgContent1" src={props.contents.object[0].src}/>
        </CardContent>
      )
    }
    else if(props.contents.object.length === 2){
      return (
        <CardContent className={classes.cardContent}>
          <Typography paragraph>이미지가 2개일 때</Typography>
          <img alt="123" style={{width:"49.5%"}} className="imgContent2" src={props.contents.object[0].src}/>
          
          <img alt="123" style={{width:"49.5%", marginLeft: "1%"}} className="imgContent2" src={props.contents.object[0].src}/>
        </CardContent>
      )
    }
    else if(props.contents.object.length === 3){
      return (
        <CardContent className={classes.cardContent}>
          <Typography paragraph>이미지가 3개일 때</Typography>
          <img alt="123" style={{width:"49.5%"}} className="imgContent3" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"49.5%", marginLeft: "1%"}} className="imgContent3" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"100%"}} className="imgContent3" src={props.contents.object[0].src}/>
        </CardContent>
      )
    }
    else if(props.contents.object.length === 4){
      return (
        <CardContent className={classes.cardContent}>
          <Typography paragraph>이미지가 4개일 때</Typography>
          <img alt="123" style={{width:"49.5%"}} className="imgContent4" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"49.5%", marginLeft: "1%"}} className="imgContent4" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"49.5%"}} className="imgContent4" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"49.5%", marginLeft: "1%"}} className="imgContent4" src={props.contents.object[0].src}/>
        </CardContent>
      )
    }
    else if(props.contents.object.length >= 5){
      return (
        <CardContent className={classes.cardContent}>
          <Typography paragraph>이미지가 5개일 때</Typography>
          <img alt="123" style={{width:"49.5%"}} className="imgContent5" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"49.5%", marginLeft: "1%"}} className="imgContent5" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"33%", marginLeft: "0.3%"}} className="imgContent5" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"33%", marginLeft: "0.3%"}} className="imgContent5" src={props.contents.object[0].src}/>
          <img alt="123" style={{width:"33%", marginLeft: "0.3%"}} className="imgContent5" src={props.contents.object[0].src}/>
        </CardContent>
      )
    }
    else {
      return (
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <img alt="123" className="imgContent" src="https://faxx-book.s3.ap-northeast-2.amazonaws.com/1574000629031_image2.png"/>
        </CardContent>
      )
    }
}