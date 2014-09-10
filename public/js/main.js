// main.js
//

(function(w, $, undefined) {
  'use strict';

  var nextTick = window.requestAnimationFrame ||
                 window.mozRequestAnimationFrame ||
                 window.webkitRequestAnimationFrame ||
                 function (callback) {
                   window.setTimeout(callback, 1000 / 60);
                 };

  console.log(nextTick);

  // STREAM
  //

	var Stream = {
    config: {

    },
    init: function(elemId) {
      Stream.$elem        = $(elemId);
      Stream.$settingsBtn = $('#js-stream-settings', Stream.$elem);
      Stream.$loadCta     = $('#js-stream-load', Stream.$elem);
      Stream.$alertCta    = $('#js-stream-alert', Stream.$elem);

      Stream.bindEvents();
    },

    bindEvents: function() {
      Stream.$loadCta.on('click', Stream.loadNewPosts);
    },

    loadNewPosts: function(e) {
      e.preventDefault();
      $(this).addClass('stream__load--hidden');

      // emit event to say we have the "AJAX" data
      // then respond by morphing lines, scrolling them in, etc
    }
  };

	$(function() {
    Stream.init('#js-stream');
  });
})(window, jQuery);
