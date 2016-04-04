'use strict';

var app = angular.module('whenigrowupApp');

app.controller('HistoryCtrl', function($state, $timeout) {
  var history = this;

  history.showButton = false;

  function reposition() {
    var dialog = $('.modal-dialog');
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height() - 55) / 2));

    // Reposition when the window is resized
    $(window).on('resize', function() {
      $('.modal:visible').each(reposition);
    });
  }

  reposition();

  history.complete = function() {
    $('#historyModal').modal('show');
    history.showButton = true;
  };

});
