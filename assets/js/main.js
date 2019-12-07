$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

});
/*
Got help from:
https://github.com/BlackrockDigital/startbootstrap-scrolling-nav/blob/master/js/scrolling-nav.js
*/
(function($) {
  "use strict"; // Start of use strict
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  
})(jQuery); // End of use strict


$(document).ready(function() {
    $.getJSON("assets/js/test.json", function(jsonObject) {
        console.log(jsonObject.quizTitle); // this will show the info it in firebug console
        console.log(jsonObject.questions[0].correctAnswer); // this will show the info it in firebug console
    });
});
