(function() {
  'use strict';

  angular
    .module('myApp')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  };

})();