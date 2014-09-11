// main.js
//

(function(w, $, undefined) {
  'use strict';

  // STREAM
  //

	var Stream = {
    config: {

    },
    init: function(elemId) {
      Stream.$elem         = $(elemId);
      Stream.$settingsBtn  = $('#js-stream-settings', Stream.$elem);
      Stream.$loadCta      = $('#js-stream-load', Stream.$elem);
      Stream.$alertCta     = $('#js-stream-alert', Stream.$elem);
      Stream.$daySep       = $('#js-stream-day-sep', Stream.$elem);
      Stream.$streamWindow = $('#js-stream-window', Stream.$elem);

      Stream.state = 'WAITING';

      Stream.bindEvents();
      setTimeout(Stream.startSimulation, 7000);
      console.log(Stream.state);
    },

    bindEvents: function() {
      Stream.$loadCta.on('click', Stream.fetchNewPosts);
      $.subscribe('loadedNewPosts', Stream.onLoadedNewPosts);
    },

    startSimulation: function() {
      Stream.state = 'STARTED';
      Stream.$loadCta.removeClass('stream__load--waiting');
      console.log(Stream.state);
    },

    fetchNewPosts: function(e) {
      e.preventDefault();

      if(Stream.state === 'ENDED') {
        return;
      }

      $(this).addClass('stream__load--hidden');

      // Pretend we have fetched new post data publish an event to hook on to.
      $.publish('loadedNewPosts');
    },

    onLoadedNewPosts: function() {

      // Morph Day separator in to a Post separator and then hide it.
      Stream.$daySep.on('animationend', function() {
        Stream.$daySep.hide();
        showNewPosts();
      });
      Stream.$daySep.addClass('stream__day-sep--morphed');

      // Slide in new posts.
      function showNewPosts() {
        Stream.$streamWindow.addClass('stream__window--top');
        Stream.state = 'ENDED';
        console.log(Stream.state);
      }
    }
  };

	$(function() {
    Stream.init('#js-stream');
  });
})(window, jQuery);
