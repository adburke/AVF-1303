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
            console.log(element);
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

app.directive('map', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            console.log(element);
            var latitude, longitude; 
            navigator.geolocation.getCurrentPosition(function (position) {
               scope.$apply(function() {
                   scope.geo(position);
               });
               console.log('geo fired');
               console.log(position);
               latitude = position.coords.latitude;
               longitude = position.coords.longitude;
               var myOptions = {
                   zoom: 8,
                   center: new google.maps.LatLng(latitude, longitude),
                   mapTypeId: google.maps.MapTypeId.ROADMAP
               };
               var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);
               
               var contentString = '<div id="content">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<h2 id="firstHeading" class="firstHeading">Hello</h2>'+
                   '<div id="bodyContent">'+
                   '<p>This example demonstrates the interaction between Phonegap geolocation</p>'+
                   '<p>and Google Maps. The result is a plot of your current location as shown</p>'+
                   '<p>with the marker.</p>'+
                   '</div>'+
                   '</div>';

               var infowindow = new google.maps.InfoWindow({
                   content: contentString
               });

               var addMarker = function(pos){
                  var myLatlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
                  var marker = new google.maps.Marker({
                       position: myLatlng, 
                       map: map,
                       title:"Hello World!"
                   });
                  infowindow.open(map,marker);
                  google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                  });
               }; 

               addMarker(position);

            }, function (err) {
                  ctrl.$setValidity('error', false);
               }
            );      
        }
    };
});