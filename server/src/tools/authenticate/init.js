import passport from 'passport';
import strategy from 'passport-local';
import authenticationMiddleware from './middleware.js'

const LocalStategy = strategy.Strategy;

const user = {
  username: 'test-user',
  password: 'test-password',
  id: 1
}

const findUser =  (username, callback) => {
  if (username === user.username) {
    return callback(null, user)
  }
  return callback(null)
}

passport.serializeUser((user, cb) => {
  cb(null, user.username)
})

passport.deserializeUser((username, cb) => {
  findUser(username, cb)
});

const initPassport = () => {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false)
        }
        if (password !== user.password  ) {
          return done(null, false)
        }
        return done(null, user)
      })
    }
  ))

  passport.authenticationMiddleware = authenticationMiddleware;
}

export default initPassport;
