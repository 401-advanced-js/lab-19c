'use strict';

const Q = require('@nmq/q/client');

const Q1 = new Q('api');

Q1.subscribe('getAll', (payload) => {
  console.log('got all', payload);
});
Q1.subscribe('post', (payload) => {
  console.log('posted', payload);
});
Q1.subscribe('getOne', (payload) => {
  console.log('got one', payload);
});
Q1.subscribe('update', (payload) => {
  console.log('updated', payload);
});
Q1.subscribe('delete', (payload) => {
  console.log('deleted', payload);
});
Q1.subscribe('error', (payload) => {
  console.log('error', payload);
});

console.log('current Q1 subscriptions:', Q1.subscriptions());

console.log('current db subscriptions:', db.subscriptions());
