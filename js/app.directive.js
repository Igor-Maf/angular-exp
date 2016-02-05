(function() {
  'use strict';
  
  angular
    .module('myApp')
    .directive('articleView', function() {
      return articleView;
    });

  var articleView = {
      restrict: 'E',
      template: '<ng-include src="avc.grabTemplate()"/>',
      scope: {},
      bindToController: {
        media: '='
      },
      controller: articleViewController,
      controllerAs: 'avc'
  };

  function articleViewController($scope) {
    this.$scope = $scope; // if in scope { media: '='}

    this.grabTemplate();
  }

  angular.extend(articleViewController.prototype, {
    grabTemplate: function() {
      if (this.media.type == "text")
        return "templates/article-text.html";
      if (this.media.type == "image")
        return "templates/article-image.html";
    }
  });

})();