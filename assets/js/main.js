(function($mainRoot, w, d) {
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
    var thisitem = $mainRoot.find("#jumbotronTrigger");
    var thisitemBuild = new YoutubeOverlayModule({
      sourceUrl: thisitem.attr("data-video"),
      triggerElement: "#" + thisitem.attr("id"),
      progressCallback: function() {
        console.log("Item activated");
      }
    });
    thisitemBuild.activateDeployment();
  }

  /* helps control the demo section for the page */
  function demoSectionInit() {
    var pe = $mainRoot.find("#demoSectionParent");
    var cp = pe.find("#demoCarousel");
    var cpConfig = {
      loop: true,
      rewind: true,
      nav: false,
      dots: false,
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
          items: 3,
          stagePadding: 20,
          dots: true
        }
      }
    };

    cp.owlCarousel(cpConfig);
    demoSectionInit.loadVideoPlayer.call(cp);
  }
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
        sourceUrl: thisitem.attr("data-video"),
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

    checkWindowScrollPosition(pe, function() {
      pe.attr("data-hasloaded", "true");
      var configObject = {
        webmVideo: pe.attr("data-webm"),
        mp4Video: pe.attr("data-mp4"),
        parentElement: pe,
        playInMobile: false,
        playInTablet: true,
        playInDesktop: true,
        fallbackImage: ""
      };
      buildHtmlVideo(configObject);
    });
  }

  function centralController() {
		smoothScroll();
    jumbotronInit();
    demoSectionInit();
    footerSectionInit();
  }

  $(d).ready(centralController);
})($("#outerBorder"), window, document);
