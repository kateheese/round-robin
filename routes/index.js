var express = require('express');
var router = express.Router();
var robin = require('../public/javascripts/roundRobin.js');

router.get('/', function(req, res) {
  res.render('index', { title: 'Round Robin' });
});

router.post('/', function(req, res) {
  res.render('index', { title: 'Round Robin',
    teams: robin.roundRobin(req.body.teams.split('\n')) });
});

module.exports = router;
