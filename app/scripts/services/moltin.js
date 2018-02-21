angular.module('ecommerceApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    // var moltin = new Moltin({ publicId: 'NOj4RDsYajQNiJnEbaLFdG96jXwEdBXAvR4JSWxOf3'});
    var moltin = new Moltin({ publicId: 'hHr6QhXDTz9XigXiyPzKaaeLEHLHJJXhychmd186' });
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });
    return deferred.promise;
  });
