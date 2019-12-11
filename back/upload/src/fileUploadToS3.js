const config = require('../config');
const express = require('express');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const cors = require('cors');
const app = express();
app.use(cors());

const s3 = new aws.S3({
  accessKeyId: config.awsConfig.accessKeyId,
  secretAccessKey: config.awsConfig.secretAccessKey,
  region: config.awsConfig.region,
});

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'faxx-book',
    // metadata: object to be sent to S3
    // a callback that accepts the request and file, and return a metadata objedt to be saved to S3
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    destination: function (req, file, cb) {
      cb(null, 'uploadImage/');
    },
    // key: name of the file
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '_' + file.originalname);
    }
  })
})

app.post('/api/uploadImage', upload.single('image'), (req, res) => {
  console.log(req.file);
  // let downloadUrl = 'https://faxx-book.s3.ap-northeast-2.amazonaws.com/' + res.file;
  let downloadUrl = req.file.location;
  console.log(req.file.location);
  return res.status(200).send(downloadUrl);
});


let listener = app.listen(4001, function () {
  console.log('Listening on port ' + listener.address().port);
});