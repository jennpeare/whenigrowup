'use strict';

angular.module('whenigrowupApp')
.controller('SplashCtrl', function($state, $timeout) {
  var splash = this;
  splash.fade = false;

  splash.transition = function() {
    splash.fade = true;
  };

  $timeout(splash.transition, 2000);
});
