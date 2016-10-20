(function($) {

    $.fn.orbit = function(options) {

        //Defaults to extend options
        var defaults = {  
            animation: 'vertical-slide',       // fade, horizontal-slide, vertical-slide, horizontal-push
            animationSpeed: 600,                // how fast animtions are
            timer: true,                        // true or false to have the timer
            advanceSpeed: 4000,                 // if timer is enabled, time between transitions 
            pauseOnHover: false,                // if you hover pauses the slider
            startClockOnMouseOut: false,        // if clock should start on MouseOut
            startClockOnMouseOutAfter: 1000,    // how long after MouseOut should the timer start again
            directionalNav: true,               // manual advancing directional navs
            captions: true,                     // do you want captions?
            captionAnimation: 'fade',           // fade, slideOpen, none
            captionAnimationSpeed: 600,         // if so how quickly should they animate in
            bullets: false,                     // true or false to activate the bullet navigation
            bulletThumbs: false,                // thumbnails for the bullets
            bulletThumbLocation: '',            // location from this file where thumbs will be
            afterSlideChange: function(){}      // empty function 
        };  
        
        //Extend those options
        var options = $.extend(defaults, options); 
    
        return this.each(function() {
        