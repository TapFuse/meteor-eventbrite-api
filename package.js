Package.describe({
  name: 'tapfuse:eventbrite-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.addFiles('eventbrite-meteor.js', 'server');

  api.export('EventbriteApi', 'server');
});

Npm.depends({
  "nbrite": "0.2.0"
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:eventbrite-meteor');
  api.addFiles('eventbrite-meteor-tests.js');
});
