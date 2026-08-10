'use strict';
  

$( function() {
    $( "#tabs" ).tabs();
  } );


  //  API variant
var SlideShow = require("slideshow")
var slideshow = new SlideShow("powerpoint")
slideshow.boot()
.then(function () { slideshow.open("sample.pptx") })
.then(function () { slideshow.start() })
.then(function () { slideshow.goto(2) })
.delay(2*1000)
.then(function () { slideshow.stop() })
.then(function () { slideshow.close() })
.then(function () { slideshow.quit() })
.then(function () { slideshow.end() })
.done()