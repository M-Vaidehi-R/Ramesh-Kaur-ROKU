const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const router = express.Router();

// by default, u cant access URLs that are different than ur own (different origin points)- this is a security feature built into the Web. However, u CAN
//use an intermediatery to "break-into" or get access to other domains and do things like data retrieval etc.
//think of  this as an virtual swipe card = its configured to allow an access to an endpoint and let u use that domain. The target in this case is our backend Roku Service
//(the database with all of the users)-we can retrieve them and show them in our UI with the middleware's access configured correctly :)

router.use("/", createProxyMiddleware({
    target: 'http://localhost:5050',
    headers: {
        accept: "application/json, application/x-www-form-urlencoded",  //these are the acceptable responses from the client
        changeOrigin: true

    },
    changeOrigin: true

}))

module.exports = router;

// This code creates an Express router that uses the http-proxy-middleware library to configure a proxy server that can be used to access resources from another domain or origin.

// The createProxyMiddleware() function creates a middleware function that intercepts incoming HTTP requests and forwards them to the specified target URL. In this case, the target URL is http://localhost:5050, which is the URL for the backend Roku service.

// The headers option is used to set custom headers that will be sent with the request to the backend service. In this case, the accept header is set to specify the types of responses that the client can handle. The changeOrigin header is set to true, which allows the proxy server to modify the Origin header of the incoming request to match the target URL.

// Finally, the router uses the middleware function created by createProxyMiddleware() to handle all incoming requests by forwarding them to the backend service. This allows the Vue.js application to access data from the backend service without running into issues with cross-origin resource sharing (CORS) restrictions.