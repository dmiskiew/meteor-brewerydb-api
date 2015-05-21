// Write your package code here!

BreweryDBApi = {
  find: function(query, callback) {
    Meteor.call('brewery-search', query, function(error, data) {
      callback(error, data);
    });
  }
};