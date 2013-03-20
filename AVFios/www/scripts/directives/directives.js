var app = angular.module('angularApp');

app.directive('camera', function() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs, ctrl) {
         element.bind('click', function() {
            // console.log('Fired');
            navigator.camera.getPicture(function (imageURI) {
               scope.$apply(function() {
                   scope.getImage(imageURI);
               });
            }, function (err) {
               ctrl.$setValidity('error', false);
            }, { quality: 50, destinationType: Camera.DestinationType.FILE_URI, saveToPhotoAlbum: true } );
         });
      }
   };
});