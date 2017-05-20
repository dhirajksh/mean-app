const express = require('express');
const router = express.Router();

var student = require('./student');
//var fee = require('./fee');
var admin = require('./admin');
var user = require('./user');
var server = require('./server');

/* GET api listing. */
router.get('/students', student.list);

router.get('/student/:id', student.find);

router.post('/student', student.create);

router.put('/student/:id', student.update);

router.delete('/student/:id', student.delete);

router.get('/class', admin.classlist);

router.get('/session', admin.sessionlist);
  
router.get('/section', admin.sectionlist);

router.get('/recipes', admin.recipelist);

router.get('/user', user.list);

router.get('/user/:id', user.find);

router.delete('/user/:id', user.delete);

router.post('/user', user.create);

router.post('/updateuser/:id', user.update);

router.get('/server', server.list);

router.get('/server/:id', server.find);

router.delete('/server/:id', server.delete);

router.post('/server', server.create);

router.put('/server', server.update);

module.exports = router;