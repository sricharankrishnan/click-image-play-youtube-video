(function($websiteRoot) {
  function homePageInit() {
    console.log("Hello World from Main.js File");
  }

  function smoothScroll() {
    var smoothScrollArray = ["#getToKnowMore", ".tocLink"];
    $.each(smoothScrollArray, function(index, element) {
      if($(element).length > 0) {
        $(element).on("click", function(event) {
          event.preventDefault();
          var hashValue = $(this.hash);
          $('html, body').stop().animate({
           scrollTop: $(hashValue).offset().top
          }, 800);
          return false;
        });
      }
    });
  }

  function centralController() {
    smoothScroll();
    homePageInit();
  }

  $(document).ready(centralController);
})($("#outerBorder"));
