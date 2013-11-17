Promise
=======

## Description

This is lightweight implementation of Promise object of the [Deferred](https://github.com/medikoo/deferred) library.

There are no dependencies to other libraries and code should work under all browsers, including the very old ones.

## Usage

You create a promise with "new Promise()" and return it instance. Each promise object have the methods "then" which will 
be called when promise was rejected, resolved, updated or terminated. You can also changed the method names if needed.
Example:

          { 
            function async() {
              var promise = new Promise();
              
              var timer = setTimeout(function() {
                promise.resolve('Some data');
              }, 1000)
              
              return promise;
            }
            
            async().then({
              resolved: function(message) {
                console.log(message);
              }
            });
          }

