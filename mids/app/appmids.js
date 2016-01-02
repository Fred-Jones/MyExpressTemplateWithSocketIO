
module.exports = function(app) {
  app.testAppMiddleware = __testAppMiddleware

}

function __testAppMiddleware(req, res, next) {
  console.log('***\n','app.testAppMiddleware', '\n***')

}
