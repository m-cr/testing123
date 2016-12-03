module.exports = {
  DATABASE_URL: 'postgres://localhost:5432/testing123',
  SESSION_SECRET: 'Optimus Prime is my real dad',
  TWITTER: {
    consumerKey: 'INSERT_TWITTER_CONSUMER_KEY_HERE',
    consumerSecret: 'INSERT_TWITTER_CONSUMER_SECRET_HERE',
    callbackUrl: 'INSERT_TWITTER_CALLBACK_HERE'
  },
  FACEBOOK: {
    clientID: 'INSERT_FACEBOOK_CLIENTID_HERE',
    clientSecret: 'INSERT_FACEBOOK_CLIENT_SECRET_HERE',
    callbackURL: 'INSERT_FACEBOOK_CALLBACK_HERE'
  },
  GOOGLE: {
    clientID: '825607132954-kgn5i0lvaoq8umma5mp57itvuf4l1lc1.apps.googleusercontent.com',
    clientSecret: 'O049V1y4Hi3_mP2DEl-BkQ3g',
    callbackURL: 'http://localhost:1337/auth/google/callback'
  },
  LOGGING: true,
  NATIVE: true
};
