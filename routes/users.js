var express = require('express');
var router = express.Router();

const firebase = require('../firebase/firebase');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const docRef = firebase.db.collection('users').doc('alovelace');

  docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  
  res.send('respond with a resource');
});

module.exports = router;
