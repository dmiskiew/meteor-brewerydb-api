BreweryDB API
----------

A Meteor library to interact with BreweryDB's API.

# Install

```
meteor add dmiskiew:brewerydb
```

# Usage

To call the library, use the `get` and `post` functions.

Example:
```
BreweryDBApi.get('/your/api/path', options, callback);
```

If `callback` is provided (client or server), the call will be made **asynchronously**. 

On the client, if you do not provide a callback, the library will return a [Q promise](https://github.com/kriskowal/q). 
On the server, it will run **synchronously**.

# Contributions

1. Make a pull request
2. Become famous contributor

*MIT license, (c) Trip20digital*
