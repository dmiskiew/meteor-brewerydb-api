BreweryDBApi.init({
  key: 'CLIENT_SECRET';
});

// mock out http
HTTP.nextResult = '';
HTTP.call = function(method, url, params, callback) {
  var self = this;
  
  return {statusCode: 200, data: {}};
}

if (Meteor.isServer) {
  Tinytest.add('BreweryBD - basic get', function(test) {
    HTTP.nextResult = 'foo';
    var result = BreweryDBApi.get('/foo/bar', {user: Meteor.users.findOne(userId)});

    test.equal(result, 'foo');
  });
}
