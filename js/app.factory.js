(function() {
  'use strict';
  
  angular
    .module('myApp')
    .factory('appDataService', appDataService);

  function appDataService($log) {
    return {
      media: [{
        id: 1,
        type: 'image',
        title: 'image gallery 1',
        text: 'some new images',
        image: 'img/image1.jpg'
      }, {
        id: 2,
        type: 'text',
        title: 'text article 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        author: 'John Doe'
      }, {
        id: 3,
        type: 'image',
        title: 'image gallery 2',
        text: 'some newer images',
        image: 'img/image2.jpg'
      }, {
        id: 4,
        type: 'text',
        title: 'text article 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        author: 'John Doe'
      }], 

      getMedia: function() {
        return this.media;
      }
    }

    $log.debug('appDataService was uploaded');
  };

})();

