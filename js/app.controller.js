(function() {
  'use strict';

   angular
    .module('myApp')
    .controller('homeController', homeController);

  function homeController(appDataService, $log) {
  	$log.debug('homeController was uploaded');

    var home = this;

    home.articleData = appDataService.getMedia();
  };

})();