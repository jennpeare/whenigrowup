'use strict';

var app = angular.module('whenigrowupApp');

app.controller('SplashCtrl', function($state, $timeout) {
  var splash = this;

  splash.fade = false;

  splash.transition = function() {
    splash.fade = true;
  };

  $timeout(splash.transition, 2000);

  splash.selected = false;

  splash.characters = [
    {
      name: 'Skye',
      occupation: 'Developer',
      avatar: '../../images/Developer.png',
      selected: false
    },
    {
      name: 'Leo',
      occupation: 'Engineer',
      avatar: '../../images/Engineer.png',
      selected: false
    },
    {
      name: 'Jemma',
      occupation: 'Biologist',
      avatar: '../../images/Biologist.png',
      selected: false
    }
  ];

  splash.pick = function() {
    splash.characters[0].selected = true;
    console.log(splash.characters[0]);
  };
});
