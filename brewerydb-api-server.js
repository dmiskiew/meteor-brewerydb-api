// kill logs
var Log = function () {}
var initialized = false;
var brewerydb_config = {};

BreweryDBApi = {
  // host component, shouldn't change
  _host: 'http://api.brewerydb.com/v2',
  
  init: function(config) {
    check(config, Object);
    check(config.key, String);

    _.extend(brewerydb_config, config);

    initialized = true;
  },

  // call a BreweryDB API Meteor.http function
  _call: function(method, path, options) {
    Log('BreweryDBApi._call, path:' + path);

    options = options || {};
    
    if (config.key) {
      var result;
      
      options.headers = options.headers || {};
      options.headers['HTTP_ACCEPT'] = 'application/json';
      options.params = options.params || {};
      options.params['key'] = config.key;

      try {
        result = HTTP.call(method, this._host + '/' + path, options);
      } catch(error) {
        return error;
      }

      return result.data;
    } else {
      return (new Meteor.Error(403, "Auth key not found. Setup your BreweryDB account and set API key"));
    }
  }
}

// setup HTTP verbs
httpVerbs = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
_.each(httpVerbs, function(verb) {
  BreweryDBApi[verb.toLowerCase()] = function(path, options) {
    return this._call(verb, path, options);
  };
});

Meteor.methods({
  'brewery-search': function(query) {
    BreweryDBApi.get('search', {q: query})
  }
});
