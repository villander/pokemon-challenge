/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'pokemon-challenge',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' https://pokeapi.co/api/v2 wss://*.firebaseio.com https://*.googleapis.com",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },
    fastboot: {
      hostWhitelist: ['https://pokeapi.co/api/v2/pokemon', /^localhost:\d+$/]
    },
    firebase: {
      apiKey: 'koTZajKCgYdB4ROYBOdr119vfMEKEdOT3qgQzceT',
      authDomain: 'https://pokemonchallenge.firebaseapp.com',
      databaseURL: 'https://pokemonchallenge.firebaseio.com',
      storageBucket: 'https://pokemonchallenge.appspot.com',
    },
    
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
         // Prevent Ember Data from overriding Date.parse.
         Date: false
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
