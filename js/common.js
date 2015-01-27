$(document).ready(function() {

function isBreakPoint(bp) {  /* The breakpoints that you set in your css */
    
    var bps = [320, 480, 768, 1024, 1200, 2600];
    var w = $(window).width();
    var min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
  }


  $(window).on("resize", function () {

    if ( isBreakPoint(768) ) {  
      /* Padding fixed height Navbar with open Bootstrap dropdown */
        
/*        var animateNavbarHeight = function(additionalHeight) {
            $('.dmixer-main-navbar').css({
                paddingBottom: additionalHeight
                });
        }

        var removeHeaderBottom = function() {
            if($('.dmixer-menu-item').hasClass('open'))
                animateNavbarHeight(0)

            if($('.dmixer-search-item').hasClass('open'))
                animateNavbarHeight(0)
        }

        var addHeaderBottom = function(moreMenuHeight) {
            if($('.dmixer-menu-item').not('.open'))
                animateNavbarHeight(moreMenuHeight)
        }

        $('body').on("click",function() {
            removeHeaderBottom();
        });

        $('.dmixer-main-menu .dropdown-toggle').on("click",(function(event){
            /*event.stopPropagation();
            var moreMenuHeight = $('.more-menu').height();
            addHeaderBottom(moreMenuHeight);

           }));

        $('.dmixer-main-search .dropdown-toggle').on("click",(function(event){
            /*event.stopPropagation();
            var moreMenuHeight = $('.dmixer-main-search .more-menu').height();
            addHeaderBottom(moreMenuHeight);

           }));*/

    }

  }).resize();

/*  var carouselContent = $('.post-item').parent().html();
  var postCircularCount =$(".post-circular li").length;
  console.log(postCircularCount);
  function isBreakPoint(bp) {  /* The breakpoints that you set in your css  
    
    var bps = [320, 480, 768, 1024, 1200, 2600];
    var w = $(window).width();
    var min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
  }

  
  var carouFredSelCall = function () {    /*  Custom configuration carousel  
 
    var options = {
          items               : 2,
          direction           : "left",
          responsive          : "true",
          prev: {
              button: "#prev",
              key: "left"
          },
          next: {
              button: "#next",
              key: "right"
          },
          scroll : {
              play            : false,
              items           : 1,
              easing          : "quadratic",
              duration        : 1000,                         
              pauseOnHover    : true
          }                   
    };

    $('#carousel ul').carouFredSel(options);

  }
  var carouselContent = $('.post-circular').parent().html();

  $(window).on("resize", function () {

    if ( isBreakPoint(2600) ) {  /* Carousel initialize 

      carouFredSelCall();

    }
    if ( isBreakPoint(1024) ) {  /* Carousel destroy  

      $('#carousel').empty().html(carouselContent);  

      if (postCircularCount >=3) {
        var postHeight = parseInt($('.post-item').height()) + parseInt($('.post-item').css('margin-bottom'));
        console.log(postHeight*3);
      } 
      else {
        $(this).find("view-more").addClass('hide-block')
      }

      
    }

  }).resize();*/


$(".dmixer-title-centered-und").each(function(){
  var titleWidth = $(this).width();
  $(this).append('<span class="temp" style="width:'+ titleWidth +'px"></span>');
});





});