(function(w, d) {
  var $websiteRoot = $("#outerBorder");

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

  function mainInit() {
    console.log("Hello and Welcome to this Jekyll Boiler Plate.\nThis is only a sample Javascript File to help you get started on your project.\nFeel free to make changes and build your project.\nHave a nice day and Happy Coding!\n----\n[Message from Boiler Plate Admin!]");
  }

  function centralController() {
    smoothScroll();
    mainInit();
  }

  $(d).ready(centralController);
})(window, document);
