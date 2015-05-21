Package.describe({
  name: 'dmiskiew:brewerydb-api',
  summary: "A Meteor library to interact with Brewerydb's API",
  version: '1.0.1',
  git: 'https://github.com/dmiskiew/brewerydb-api'
});

Package.on_use(function (api, where) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
    api.use([
      'http',            // HTTP provides an HTTP request API on the client and server.
      'livedata',        // Internal meteor package.
      'mrt:q@1.0.1',     // A tool for making and composing asynchronous promises in JavaScript.
      'underscore'       // provides utility functions to simplify processing arrays, objects and functions.
    ]);
  } else {
    api.use([
      'http',            // HTTP provides an HTTP request API on the client and server.
      'livedata',        // Internal meteor package.
      'q',     // A tool for making and composing asynchronous promises in JavaScript.
      'underscore'       // provides utility functions to simplify processing arrays, objects and functions.
    ]);
  }
  
  api.add_files([
      'brewerydb-api-server.js'    // API methods implementation
    ], 
    ['server']
  );
  
  api.export('BreweryDBApi', ['server']);
});

Package.on_test(function (api) {
  api.use(['dmiskiew:brewerydb-api', 'tinytest', 'http']);

  api.add_files('brewerydb-api-tests.js', ['server']);
});
