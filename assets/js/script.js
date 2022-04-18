$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
  
  
    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-primary");
      } else {
        $(".navbar").removeClass("bg-primary");
      }
    });
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-primary");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-primary");
        } else {
        }
      }
    });
    // ############
  
    // document ready
  });

  $( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
  
    /* ####### HERO SECTION ####### */
  
    $('.hero .content .header').delay(500).animate({
      'opacity':'1',
      'top': '50%'
    },1000);
  
  
    $(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      /* ##### ABOUT MYSELF SECTION #### */
      if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
        $('.about-myself .content h2').addClass('aboutTitleVisible');
      } 
    /* ##### EXPERIENCE SECTION #### */
  
        // Check the location of each element hidden */
        $('.experience .content .hidden').each( function(i){
  
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
  
              $(this).animate({
                'opacity':'1',
                'margin-left': '0'
              },600);
            }
        });
  
    /*###### SKILLS SECTION ######*/
  
      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;
  
      if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){
  
        $('.skills-bar-container li').each( function(){
  
          var $barContainer = $(this).find('.bar-container');
          var dataPercent = parseInt($barContainer.data('percent'));
          var elem = $(this).find('.progressbar');
          var percent = $(this).find('.percent');
          var width = 0;
  
          var id = setInterval(frame, 15);
  
          function frame() {
            if (width >= dataPercent) {
                clearInterval(id);
            } else {
              width++;
              elem.css("width", width+"%");
              percent.html(width+" %");
            }
          }
        });
        developmentIsVisible = true;
      }
    }); // -- End window scroll --
  });