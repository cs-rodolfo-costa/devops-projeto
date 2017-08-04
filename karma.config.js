// Karma configuration
// Generated on Fri Aug 04 2017 13:27:23 GMT-0300 (-03)

module.exports = function(config) {
  var configuration = {
    // other things

    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
};

if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
}

config.set(configuration);
}
