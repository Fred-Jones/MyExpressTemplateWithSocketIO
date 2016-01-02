var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chilitos'
    },
    port: 3000,
    db: 'mongodb://localhost/chilitos-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chilitos'
    },
    port: 3000,
    db: 'mongodb://localhost/chilitos-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chilitos'
    },
    port: 3000,
    db: 'mongodb://localhost/chilitos-production'
  }
};

module.exports = config[env];
