const Q = require('@nmq/q/server');
Q.start();

const Q1 = new Q('api');

Q1.monitorEvent('getAll');
Q1.monitorEvent('post');
Q1.monitorEvent('getOne');
Q1.monitorEvent('update');
Q1.monitorEvent('delete');
Q1.monitorEvent('error');