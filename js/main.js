(function($websiteRoot) {
  function homePageInit() {
    console.log("Hello World from Main.js File");
  }

  function homePageVideoBg() {
    if($("#homePageJumbotron").length > 0) {
      function checkIE() {
        var undef,
            v = 3,
            div = document.createElement("div");
        while(div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><!endif-->',
              div.getElementsByTagName('i')[0]);
        return v > 4 ? v : undef;
      }
      function checkHost() {
        switch(true) {
          case isIOS && !isIE && $(window).innerWidth() >= 1200:
            return true;

          default:
            if(!isIOS && !isIE) {
              return true;
            }
        }
      }
    
      var isIOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),
          isIE = checkIE(),
          videoShowStatus = checkHost();
      if(videoShowStatus) {
        var homeJumbo = $("#homePageJumbotron"),
            videoParent = homeJumbo.find(".videoParent"),
            videoTag = $('<video loop muted autoplay playsinline></video>'),
            webmSrc = $('<source/>'),
            mp4Src = $('<source/>'),
            videoObjects = {
              sourceWebm: {link: "./assets/videos/lava-lamp-video.webm", vidType: "video/webm"},
              sourceMp4: {link: "./assets/videos/lava-lamp-video.mp4", vidType: "video/mp4"}
            };
        webmSrc.attr({
          src: videoObjects.sourceWebm.link,
          type: videoObjects.sourceWebm.vidType
        });
        mp4Src.attr({
          src: videoObjects.sourceMp4.link,
          type: videoObjects.sourceMp4.vidType
        });
        webmSrc.appendTo(videoTag);
        mp4Src.appendTo(videoTag);
        videoTag.appendTo(videoParent);
        videoParent.removeClass("hiddenTransform");
      }
    }
  }

  function centralController() {
    homePageInit();

    $(window).load(function() {
      homePageVideoBg();
    });
  }

  $(document).ready(centralController);
})($("#outerBorder"));
