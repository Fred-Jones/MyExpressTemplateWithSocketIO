var passport = require('passport')
module.exports = {
  isAtuhed: __isAuthed,
  login: __login,
  logout: __logout,
  signup: __signup,
  user: __user
}

function __isAuthed(req, res, next) {
  if(!req.isAuthenticated()) {
      return res.redirect('/login')
    }
    next()
}
function __login(req, res, next) {
  passport.authenticate(req.body.authtype, {
      session: true
    }, function(err, user) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if(err) {return next(err)}
        console.log('Authorized user ', user)
        res.redirect('/user')
      });
    })(req, res, next);
}
function  __logout(req, res, next) {
  req.logout()
  res.redirect('/')
}
function __signup(req, res, next) {
  User.findOne({username: req.body.username}, function (err, user) {
     if(err) {
       throw new Error(err)
       res.end('error')
     }
     if(!err && user) {
       res.redirect('/signup')
     }
     if(!err && !user) {
       console.log('New user')
       var newUser = new User({
         username: req.body.username,
         password: req.body.password,
         email: req.body.email,
         profile: {
           profpic: 'pic'
         }
       })
       newUser.save()
       res.render('/user', {
         userinfo: {
           unsername: req.body.username,
          password: req.body.password
         }
       })
     }

  })
}
function __user(req, res, next) {
    res.render('user')
}
