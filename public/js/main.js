// main.js
//

(function(w, $, undefined) {
  'use strict';

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
      // ...
    }
  };

	$(function() {
    Stream.init('#js-stream');
  });
})(window, jQuery);
