'use strict';

angular.module('whenigrowupApp')
.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl: 'views/splash.html',
    controller: 'SplashCtrl as splash'
  })

  // pick your character
  .state('characters', {
    url: '/characters',
    templateUrl: 'views/characters.html'
  })

  // when user has 'logged in'
  .state('user', {
    abstract: true,
    url: '/user',
    templateUrl: 'views/user/main.html'
  })
  .state('user.dashboard', {
    url: '',
    templateUrl: 'views/user/dashboard.html',
    controller: 'ExploreCtrl as explore'
  })
  .state('user.inbox', {
    url: '/inbox',
    templateUrl: 'views/user/inbox.html'
  })
  .state('user.school', {
    url: '/school',
    templateUrl: 'views/user/school.html'
  })
  .state('user.profile', {
    url: '/profile',
    templateUrl: 'views/user/profile.html'
  })

  // lessons
  .state('user.lesson', {
    abstract: true,
    url: '/lesson',
    templateUrl: 'views/lesson/main.html'
  })
  .state('user.lesson.intro', {
    url: '/intro',
    templateUrl: 'views/lesson/intro.html'
  })
  .state('user.lesson.variables', {
    url: '/variables',
    templateUrl: 'views/lesson/variables.html'
  })
  .state('user.lesson.history', {
    url: '/history',
    templateUrl: 'views/lesson/history.html'
  });
});
