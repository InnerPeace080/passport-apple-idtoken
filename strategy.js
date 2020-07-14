/**
 * Module dependencies.
 */
var util = require('util'),
  OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
  InternalOAuthError = require('passport-oauth').InternalOAuthError;
const appleSignin = require('apple-signin');
/**
 * `Strategy` constructor.
 *
 * The Apple authentication strategy authenticates requests by delegating to
 * Apple using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`           identifier of Apple Service ID
 *
 * NOTE: accessToken,refreshToken allway undefined
 *
 * Examples:
 *
 *     passport.use(new AppleStrategy({
 *         clientID: '123-456-789',
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function AppleIdTokenStrategy(options, verify) {
  options = options || {};  //eslint-disable-line
  options.authorizationURL = options.authorizationURL || 'https://appleid.apple.com/auth/authorize';
  options.tokenURL = options.tokenURL || 'https://appleid.apple.com/auth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'apple-token';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(AppleIdTokenStrategy, OAuth2Strategy);

/**
 * Authenticate request by delegating to a service provider using OAuth 2.0.
 *
 * @param {Object} req
 * @api protected
 */
AppleIdTokenStrategy.prototype.authenticate = function(req, options) {
  options = options || {};  //eslint-disable-line
  var self = this;

  if (req.query && req.query.error) {
    // TODO: Error information pertaining to OAuth 2.0 flows is encoded in the
    //       query parameters, and should be propagated to the application.
    return this.fail();
  }

  if (!req.body) {
    return this.fail();
  }
  var idToken = req.body[options.tokenField||'access_token'] || req.query[options.tokenField||'access_token'] || req.headers[options.tokenField||'access_token'];
  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
  appleSignin.verifyIdToken(idToken, options.clientID)
    .then((jwtClaims) => {
      const profile = jwtClaims;
      profile.provider = 'apple';
      profile._raw = idToken;
      profile.id = jwtClaims.sub;

      if (self._passReqToCallback) {
        self._verify(req, undefined, undefined, profile, verified);
      } else {
        self._verify(undefined, undefined, profile, verified);
      }

      return;
    })
    .catch((error) => {
      return self.error(new InternalOAuthError('token is not verified', error));
    });
};

/**
 * Expose `AppleIdTokenStrategy`.
 */
module.exports = AppleIdTokenStrategy;
