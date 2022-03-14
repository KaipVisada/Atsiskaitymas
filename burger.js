"use strict";
(function($) { 
  $(function() { 
    // Hamburger to X 
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);