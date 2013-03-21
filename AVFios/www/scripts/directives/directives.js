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
               },
               { quality: 50, destinationType: Camera.DestinationType.FILE_URI, saveToPhotoAlbum: true }
            );
         });
      }
   };
});

app.directive('geolocation', function() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs, ctrl) {
         element.bind('click', function() {
            // console.log('Fired');
            navigator.geolocation.getCurrentPosition(function (position) {
               scope.$apply(function() {
                   scope.getGeo(position);
               });
            }, function (err) {
                  ctrl.$setValidity('error', false);
               }
            );
         });
      }
   };
});

app.directive('takevideo', function() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs, ctrl) {
         element.bind('click', function() {
            // console.log('Fired');
            navigator.device.capture.captureVideo(function (videoArray) {
               scope.$apply(function() {
                   scope.getVideo(videoArray);
               });
            }, function (err) {
                  ctrl.$setValidity('error', false);
                  console.log(err);
               }
            );
         });
      }
   };
});

app.directive('accel', function() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs, ctrl) {
         element.bind('click', function() {
            // console.log('Fired');
            navigator.accelerometer.watchAcceleration(function (acceleration) {
               scope.$apply(function() {
                   scope.getAccel(acceleration);
               });
            }, function (err) {
                  ctrl.$setValidity('error', false);
                  console.log(err);
               }
            );
         });
      }
   };
});
