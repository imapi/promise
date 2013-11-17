Promise
=======

## Description

This is lightweight implementation of Promise object of the [Deferred](https://github.com/medikoo/deferred) library.

There are no dependencies to other libraries and code should work under all browsers, including the very old ones.

## Usage

Create a promise with "new Promise()" and return its instance. Each promise object have the methods "then" which will 
be called when promise was rejected, resolved, updated or terminated. Method names could also be changed if needed.
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

