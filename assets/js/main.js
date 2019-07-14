(function(w, d) {
  var $websiteRoot = $("#outerBorder");

  function initDemoVideos() {
    var trig1 = $("#demo1"),
        trig2 = $("#demo2"),
        trig3 = $("#demo3");

    trig1Id = "#" + trig1.attr("id");
    trig2Id = "#" + trig2.attr("id");
    trig3Id = "#" + trig3.attr("id");

    /* Demo 1 Segment */
    var buildOne = new YoutubeOverlayModule({
      sourceUrl: trig1.attr("data-videourl"),
      triggerElement: trig1Id,
      progressCallback: function(thisResponse) {
        console.log("Trigger 1 Response");
        console.log(thisResponse);
      }
    });
    buildOne.activateDeployment();

    /* Demo 2 Segment */
    var buildTwo = new YoutubeOverlayModule({
      sourceUrl: trig2.attr("data-videourl"),
      triggerElement: trig2Id,
      progressCallback: function(thisResponse) {
        console.log("Trigger 2 Response");
        console.log(thisResponse);
      }
    });
    buildOne.activateDeployment();

    /* Demo 3 Segment */
    var buildThree = new YoutubeOverlayModule({
      sourceUrl: trig3.attr("data-videourl"),
      triggerElement: trig3Id,
      progressCallback: function(thisResponse) {
        console.log("Trigger 3 Response");
        console.log(thisResponse);
      }
    });
    buildThree.activateDeployment();
  }

	function smoothScroll() {
    var smoothScrollArray = ["#exploreButton"];
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
    initDemoVideos();
		smoothScroll();
  }

  $(d).ready(centralController);
})(window, document);
