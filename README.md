# Click-Image-Play-Youtube-Video
![Status](https://img.shields.io/github/checks-status/sricharankrishnan/click-image-play-youtube-video/master)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/click-image-play-youtube-video)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/click-image-play-youtube-video)
![License](https://img.shields.io/github/license/sricharankrishnan/click-image-play-youtube-video)
<br/>
<br/>
### About
This is a javascript/jquery plugin that can be easily integrated into your web app. The main purpose of this plugin is to provide a 
simple yet effect user interface, in the form of an overlay, to help play youtube embeded videos, based on a click event. This click 
event can be bound to all clickable HTML elements and is not restricted to images.

If you would like to see a Demo or visit the Webiste, <a href="https://sricharankrishnan.github.io/click-image-play-youtube-video/">click here</a>.
Otherwise, lets get you started on the installations and downloads.<br/><br/>

### Getting Started
Before you start coding, download the required files. <a href="https://github.com/sricharankrishnan/click-image-play-youtube-video/tree/master/plugin-bundle-files">Click here</a> 
to proceed to the section for downloading. The javascript file `youtube-overlay.js` is required. When it comes to stylesheets, you can either download the 
SCSS file which is `youtube-overlay.scss` or the raw CSS file which is `youtube-overlay.css`.

I'm guessing you know how to place a script tag and a link tag referencing to the location of the above files for your web app. Once you've got your 
files, lets get to work with code.
<br/><br/>

### Prerequisites
Javascript. Jquery. HTML. CSS. Sass(optional)
<br/><br/>

### Built Using
- HTML
- CSS (Sass Preprocessor)
- Jquery
<br/><br/>

### Usage
1.  If you have downloaded and placed your files properly, refresh your browser and open up the console. You should be able to see the Javascript Constructor 
    when you type 
    ```javascript 
    new YoutubeOverlayModule
    ```

2.  The click event can be bound to any element in the html file. Although you don't need to register a click event, you would need to initialize this setup 
    by using the javascript constructor. Lets say you have an image:
    ```
      <img src="/some/example/path/to/image" class="img-responsive center-block" alt="Example" title="Example" id="exampleImage"/>
    ```

3.  Placing an id for the element is important and mandatory for this to work. Please remember this. If you have multiple elements grouped similarly, I could 
    suggest looping them with javascript and then writing the code that helps to trigger the youtube overlay.

4.  Next you've got to place the required embed code src onto the element. So, in a youtube video, click on the Share button, choose embed and copy paste the 
    src value. Now your image element above would look like this:
    ```
      <img src="/some/example/path/to/image" class="img-responsive center-block" alt="Example" title="Example" id="exampleImage"
      data-videourl="https://www.youtube.com/embed/1Q8fG0TtVAY"/>
    ```

5.  Now write the javascript as shown below:
    ```javascript
    var img = $("#exampleImage");
    var configObject = {
      sourceUrl: img.attr("data-videourl"),
      triggerElement: "#" + img.attr("id"),
      progressCallback: function() {
        console.log("Callback Invoked.");
      }
    };

    var videoBuild = new YoutubeOverlayModule(configObject);
    ```

6.  After writing the code in the way shown above, you've got to deploy it into your web app (otherwise its not going to work). Use the available deployment method as shown below:
    ```javascript
      videoBuild.activateDeployment();
    ```

7.  You're all set and good to go! Refresh your browser and see this working. If you've been able to understand things, I'm sure you can build different patterns that suit different scenarios. 
    If you click on the example image that you've inserted following this documentation, things should be working fine.
<br/><br/>

###  Raising Issues for the Project
I don't consider this a superhero project but as of May 2021, its nice to see some appreciation and support coming in. If you do have any issues 
I'd definetly try to see what I can do help support. Please go ahead and raise a good ol' Github issue and would write back to you depending upon 
how it could be resolved.
<br/><br/>

###  Support
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer.
Speak to your friends and colleagues about this project too if you can and seek their support.

Here is wishing you a nice day and happy coding. Cheers!
