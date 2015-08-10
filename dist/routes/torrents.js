var express = require('express');
var xmlrpc = require('xmlrpc');
var router = express.Router();
var torrents = require('../models/torrents')();

router.get('/', function(req, res, next) {

});

router.get('/add', function(req, res, next) {
  torrents.add('get', function(error, results) {
    res.json(results);
  })
});

router.post('/add', function(req, res, next) {
  torrents.add(req.body, function(error, results) {
    res.json(results);
  })
});

router.get('/list', function(req, res, next) {
  torrents.listTorrents(function(error, results) {
    res.json(results);
  });
});

router.get('/:hash/stop', function(req, res, next) {
  var hash = req.params.hash;
  torrents.stopTorrent(hash, function(error, results) {
    res.json(results);
  })
});

router.get('/:hash/start', function(req, res, next) {
  var hash = req.params.hash;
  torrents.startTorrent(hash, function(error, results) {
    res.json(results);
  })
});

module.exports = router;
