import React, { useState } from 'react'
import {Button, makeStyles} from '@material-ui/core'
import { useApolloClient } from '@apollo/react-hooks';

const useStyles = makeStyles(() => ({
  photoButton: {
    backgroundColor: '#f5f6f7',
    color: '#2b2b2b',
    "&:hover": {
      backgroundColor: "#99D999"
    },
    marginTop: 1,
    marginBottom: 1

  }
}))

const FeedWriteImage = () => {
  const [files, setFiles] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const client = useApolloClient();
  const classes = useStyles();

  // update preview image
  const onPreviewImage = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);

    files.forEach((file, i) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setFiles((prevState) => {
          return [...prevState, file];
        });
        setImagePreviewUrls((prevState) => {
          console.log("reader.result: " + reader.result)
          return [...prevState, reader.result];
        })
      }
      reader.readAsDataURL(file);
    });
  }
  return (
    <div>
      <input id="photo/video-button-file" accept="image/*" type="file" multiple style={{ display: "none" }} onChange={onPreviewImage} />
      {imagePreviewUrls.map((imagePreviewUrl, i) => {
        return (<img key={i} src={imagePreviewUrl} height="120" />);
      })}
      <label htmlFor="photo/video-button-file" >
        <Button multiple type="file" variant="contained" color="primary" component="span" className={classes.photoButton}>Photo/Video</Button>
      </label>
    </div>
  )
}

export default FeedWriteImage;