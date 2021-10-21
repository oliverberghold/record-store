jQuery(document).ready(function($) {

  // scroll top
  $(function() {
      var header = $(".page-navigation");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 5) {
              header.addClass("page-navigation--fixed");
          } else {
              header.removeClass("page-navigation--fixed");
          }
      });
  });

});
