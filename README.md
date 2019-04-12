![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab19c

### Spencer Hirata

### Links and Resources
* [PR](https://github.com/401-advanced-js/lab-19c/pull/1)
* [![Build Status](https://travis-ci.com/401-advanced-js/lab-17.svg?branch=master)](https://travis-ci.com/401-advanced-js/lab-18)

#### Documentation
* [jsdoc](https://sleepy-everglades-35707.herokuapp.com/docs)

### Setup
#### `.env` requirements
* `PORT` ~not required

#### Running the app
* `npm i` ~ all dependencies
* in your src folder (in this order too)
  1. `nodemon server.js`
  2. `nodemon logger.js`
  3. in base directory
    a. `nodemon`
    b. go to 'http://localhost:3001' and ping these routes while looking at the other two tabs
    '/public-stuff'
    '/hidden-stuff'
    '/something-to-read'
    '/create-a-thing'
    '/update'
    '/jp'
    '/bye-bye'
    '/everything'
  
#### Tests
* `npm run test`

#### UML
![socket.io](./assets/lab18.jpg);
