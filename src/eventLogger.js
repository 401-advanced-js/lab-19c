'use strict';

const Q = require('@nmq/q/client');

const Q1 = new Q('api');

db.subscribe('error', (payload) => {
  console.log('stuff didnt work', payload);
})

console.log('current Q1 subscriptions:', Q1.subscriptions());

console.log('current db subscriptions:', db.subscriptions());
