'use strict';

angular.module('whenigrowupApp')
.controller('ExploreCtrl', function() {
  var explore = this;

  explore.lessons = [{
    img: '../../images/intro-logo.jpg',
    header: 'Level one',
    title: 'Introductory Insights',
    description: 'Get a taste of how programming is changing the world and how you can as well!',
    route: 'intro',
    complete: true
  },
  {
    img: '../../images/variables-logo.jpg',
    header: 'Level two',
    title: 'Vicarious Variables',
    description: 'Take matters into your own hands, start your trek to becoming a proud programmer!',
    route: 'variables',
    complete: false
  },
  {
    img: '../../images/history-logo.jpg',
    header: 'Level three',
    title: 'Heroic History',
    description: 'Explore the depths of this exciting job by diving into the history of Ada Lovelace, a profound pioneer of computer science.',
    route: 'history',
    complete: false
  }];
});
