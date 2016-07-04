/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'pokemon-challenge',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' https://auth.firebase.com  https://pokeapi.co/api/v2 wss://*.firebaseio.com",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },
    firebase: {
      apiKey: 'koTZajKCgYdB4ROYBOdr119vfMEKEdOT3qgQzceT',
      authDomain: 'https://pokemonchallenge.firebaseapp.com',
      databaseURL: 'https://pokemonchallenge.firebaseio.com',
      storageBucket: 'https://pokemonchallenge.appspot.com',
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
