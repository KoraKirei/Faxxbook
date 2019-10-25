import React, { useState } from 'react';
import { Col, Card, Input, Button, Avatar, Icon } from 'antd';

const FeedCard = (props) => {
  return(
    <>
      <Card style={{marginTop: '15px'}} title={<><Avatar style={{marginRight: '10px'}} icon="user" /><span>종호</span></>} actions={[<Icon type="like" />, <Icon type="message" />, <Icon type="share-alt" />]}>
        {props.feed.text}
      </Card>
    </>
  );
}

const Feeds = () => {
  const { TextArea } = Input;

  const [value, setValue] = useState('');

  const [feedItems, setFeedItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    setFeedItems(feedItems.concat({text: value}));
    setValue('');
  }

  return (
    <>
      <Col xs={24} md={6} style={{backgroundColor: '#E6E6E6'}}>
        <div style={{height: '1000px'}} />
      </Col>
      <Col xs={24} md={12} style={{backgroundColor: '#E6E6E6'}}>
        <Card style={{marginTop: '20px'}} title="Create Post">
          <TextArea autoSize={{ minRows: 4, maxRows: 6}} type="text" placeholder="What's on your mind, 종호?" value={value} onChange={handleChange} />
          <Button style={{ float: 'right', marginTop: '20px' }} onClick={handleClick}>게시</Button>
        </Card>
        {feedItems.map((feed, index) => (
          <FeedCard feed={feed} key={index} />
        ))}
        
        <div style={{height: '1000px'}} />
      </Col>
      <Col xs={24} md={6} style={{backgroundColor: '#E6E6E6'}}>
        <div style={{height: '1000px'}} />
      </Col>                  
    </>
  );
}

export default Feeds;