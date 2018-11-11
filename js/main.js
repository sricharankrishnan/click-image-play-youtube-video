(function($websiteRoot) {
  function homePageInit() {
    console.log("Hello World from Main.js File");
  }

  function centralController() {
    homePageInit();
  }

  $(document).ready(centralController);
})($("#outerBorder"));
