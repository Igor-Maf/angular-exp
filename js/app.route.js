(function() {
  'use strict';

  angular
    .module('myApp')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .state('main', {
        url: '/',
        templateUrl: 'main.html',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .state('results', {
        url: '/results',
        params: {
          pet: null,
        },
        templateUrl: 'results.html',
        controller: 'resultsController',
        controllerAs: 'results'
      });

    $urlRouterProvider.otherwise('/');
  };

})();