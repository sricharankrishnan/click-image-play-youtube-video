(function($mainRoot, w, d) {
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
  
  /* checks the window scroll pos and then, will trigger the necessary callback fuction */
  function checkWindowScrollPosition(thisParentElement, thisCallback) {
    try {
      if (!thisParentElement || !thisCallback) {
        throw new Error(
          "requires 2 mandatory arugments for functioning. Please check what has been passed"
        );
      } else if (typeof thisCallback !== "function") {
        throw new Error(
          "requires the argument 'thisCallback' to be of function type only"
        );
      } else {
        $(window).on("scroll", function() {
          var elementTopPos = thisParentElement.offset().top,
            elementBotPos = elementTopPos + thisParentElement.outerHeight(),
            viewportTopPos = $(window).scrollTop(),
            viewportBotPos = viewportTopPos + $(window).height(),
            hasDataLoaded = thisParentElement.attr("data-hasloaded");

          if (
            elementBotPos > viewportTopPos &&
            elementTopPos < viewportBotPos &&
            hasDataLoaded === "false"
          ) {
            thisCallback();
          }
        });
      }
    } catch (thisError) {
      console.error("checkWindowScrollPosition() -> " + thisError);
    }
  }

  /* helps to build the required elements for the jumbotron section */
  function jumbotronInit() {
    var pe = $mainRoot.find("#jumbotronSection");
    var insertElement = pe.find(".customRow"); 
    var configObject = {
      webmVideo: pe.attr("data-webm"),
      mp4Video: pe.attr("data-mp4"),
      parentElement: insertElement,
      playInMobile: true,
      playInTablet: true,
      playInDesktop: true,
      fallbackImage: ""
    };
    buildHtmlVideo(configObject);
  }

  /* helps control the demo section for the page */
  function demoSectionInit() {
    var pe = $mainRoot.find("#demoSectionParent");
    var cp = pe.find("#demoCarousel");
    var cpConfig = {
      loop: true,
      rewind: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 20
        },
        768: {
          items: 3,
          stagePadding: 20
        },
        992: {
          items: 3,
          stagePadding: 20
        },
        1200: {
          loop: false,
          items: 5,
          stagePadding: 20
        }
      }
    };

    cp.owlCarousel(cpConfig);

    checkWindowScrollPosition(pe, function() {
      pe.attr("data-hasloaded", "true");
      demoSectionInit.loadCarouselImages.call(cp);
      demoSectionInit.loadVideoPlayer.call(cp);
    });
  }
  /* loads carousel images */
  demoSectionInit.loadCarouselImages = function() {
    var $this = this;
    var items = $this.find(".carouselItem");
    var len = items.length;
    var counter = 0;

    function startImageLoad() {
      var thisitem = items.eq(counter);
      var imgsrc = thisitem.attr("data-img");
      var imgname = thisitem.attr("data-imgname");
      var img = $('<img class="img-responsive center-block"/>');

      img.attr({
        "title": imgname,
        "alt": imgname,
        "src": imgsrc
      })
      .on("load", function() {
        thisitem.removeClass("isLoading").find(".borderBoxContainer").append(img);
        nextIteration();
      })
      .on("error", function() {
        nextIteration();
      });

      function nextIteration() {
        ++counter;
        if(counter < len) {
          setTimeout(startImageLoad, 60);
        }
      }
    }
    startImageLoad();
  };
  /* loads the youtube js overlay */
  demoSectionInit.loadVideoPlayer = function() {
    var $this = this;
    var citems = $this.find(".carouselItem");
    var len = citems.length;

    for (var i = 0; i < len; ++i) {
      citems.eq(i).attr("id", "item" + i);
    }

    citems.each(function(index, thisitem) {
      var thisitem = $(thisitem);
      var thisitemBuild = new YoutubeOverlayModule({
        sourceUrl: thisitem.attr("data-videourl"),
        triggerElement: "#" + thisitem.attr("id"),
        progressCallback: function() {
          console.log("Item activated");
        }
      });
      thisitemBuild.activateDeployment();
    });
  }

  /* footer section handler */
  function footerSectionInit() {
    var pe = $("#appFooterParent");

    console.log(pe);
    checkWindowScrollPosition(pe, function() {
      pe.attr("data-hasloaded", "true");
      var configObject = {
        webmVideo: pe.attr("data-webm"),
        mp4Video: pe.attr("data-mp4"),
        parentElement: pe,
        playInMobile: true,
        playInTablet: true,
        playInDesktop: true,
        fallbackImage: ""
      };
      buildHtmlVideo(configObject);
    });
  }

  function centralController() {
    //initDemoVideos();
		smoothScroll();
    jumbotronInit();
    demoSectionInit();
    footerSectionInit();
  }

  $(d).ready(centralController);
})($("#outerBorder"), window, document);
