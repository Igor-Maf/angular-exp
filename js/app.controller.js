(function() {
  'use strict';

   angular
    .module('myApp')
    .controller('homeController', homeController)
    .controller('mainController', mainController)
    .controller('resultsController', resultsController);

  function homeController(appDataService) {
    var home = this;

    home.articleData = appDataService.getMedia();
  };

  function mainController(resultService, $state, $log) {
    var main = this;

    main.setText = function() {
    	$log.debug('was clicked');
    	resultService.setResult(main.valueOne);
    	$state.go('results');
    }

    main.one = 'cat';
    main.two = 'dog';
    main.three = 'fish';
  };

  function resultsController(resultService, $log, $stateParams) {
    var results = this;

    results.valueTwo = resultService.getResult();

    $log.debug($stateParams);

    results.myPet = $stateParams.pet;
  };

})();