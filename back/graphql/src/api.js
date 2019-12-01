import app from './app';

const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const awsServerlessServer = awsServerlessExpress.createServer(app);
app.use(awsServerlessExpressMiddleware.eventContext());

exports.handler = (event, context) => { awsServerlessExpress.proxy(awsServerlessServer, event, context) }