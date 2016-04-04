'use strict';

var app = angular.module('whenigrowupApp');

app.controller('VariablesCtrl', function($state, $timeout) {
  var variables = this;

  variables.showButton = false;

  function reposition() {
    var dialog = $('.modal-dialog');
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height() - 55) / 2));

    // Reposition when the window is resized
    $(window).on('resize', function() {
      $('.modal:visible').each(reposition);
    });
  }

  reposition();

  variables.complete = function() {
    $('#variablesModal').modal('show');
    variables.showButton = true;
  };

});
