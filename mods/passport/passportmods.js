var path = require('path')
var glob = require('glob')
var config = require('../../config/config.js')
var passport = require('passport')

var strategies = glob.sync(path.normalize(config.root + __dirname + '/strategies/*.js'))

strategies.forEach(function(strategy) {
  passport.use(new require(strategy))
})
