(function() {
  'use strict';
  
  angular
    .module('myApp', [
      'ui.router'
    ]);

  angular
    .element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
    });
    
})();