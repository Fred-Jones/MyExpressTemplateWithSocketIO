module.exports = function(app) {
  app.user.testUserMiddleware = __testUserMiddleware
}

function __testUserMiddleware(req, res, next) {
  console.log('***\n', 'app.user.testUserMiddleware', '\n***')
}
