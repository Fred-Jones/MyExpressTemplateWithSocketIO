var express = require('express')
var r = require('./routes/routes.js')
var passport = require('passport')

module.exports = function(app) {
  app.use('/login', r.login)
  app.use('/logout', r.logout)
  app.use('/signup', r.signup)
}


// router.get('/logout', r.login)
// router.get('/signup', r.logout)
