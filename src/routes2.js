'use strict';

const express = require('express');
const router = express.Router();
// const auth = require('./middleware.js');

const Q = require('@nmq/q/client');

router.get('/public-stuff', (req,res,next) => {
  Q.publish('api', 'error');
  res.status(200).send('You can get here!');
});
router.get('/hidden-stuff',(req,res,next) => {
  Q.publish('api', 'read');
  res.status(200).send('You only got here with a login');
});
router.get('/something-to-read',(req,res,next) => {
  Q.publish('api', 'getOne');
  res.status(200).send('You only got here with a read permission');
});
router.post('/create-a-thing',(req,res,next) => {
  Q.publish('api', 'post');
  res.status(200).send('You only got here with a create permission');
});
router.put('/update', (req,res,next) => {
  Q.publish('api', 'update');
  res.status(200).send('You only got here with a update permission');
});
router.patch('/jp', (req,res,next) => {
  Q.publish('api', 'update');
  res.status(200).send('You only got here with a update permission');
});
router.delete('/bye-bye', (req,res,next) => {
  Q.publish('api', 'delete');
  res.status(200).send('You only got here with a delete permission');
});
router.get('/everything', (req,res,next) => {
  Q.publish('api', 'read');
  res.status(200).send('You only got here with a superuser permission');
});


module.exports = router;