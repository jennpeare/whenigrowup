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
      occupation: 'Developer',
      icon: 'flaticon-developer',
      color: '#db3340',
      selected: false
    },
    {
      occupation: 'Engineer',
      icon: 'flaticon-engineer',
      color: '#18a676',
      selected: false
    },
    {
      occupation: 'Biologist',
      icon: 'flaticon-biologist',
      color: '#e8b71a',
      selected: false
    },
    {
      occupation: 'Astronaut',
      icon: 'flaticon-astronaut',
      color: '#167ba7',
      selected: false
    },
    {
      occupation: 'Chemist',
      icon: 'flaticon-chemist',
      color: '#a295ff',
      selected: false
    },
    {
      occupation: 'Physicist',
      icon: 'flaticon-physicist',
      color: '#ff781f',
      selected: false
    }
  ];

  splash.pick = function() {
    splash.characters[0].selected = true;
  };
});
