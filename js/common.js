$(document).ready(function() {

    function isBreakPoint(bp) { /* The breakpoints that you set in your css */

        var bps = [320, 480, 768, 1024, 1262, 2600];
        var w = $(window).width();
        var min, max;
        for (var i = 0, l = bps.length; i < l; i++) {
            if (bps[i] === bp) {
                min = bps[i - 1] || 0;
                max = bps[i];
                break;
            }
        }
        return w > min && w <= max;
    }

        /* Padding fixed height Navbar with open Bootstrap dropdown */

    var animateNavbarHeight = function(additionalHeight) {
        $('.dmixer-main-navbar').css({
            paddingBottom: additionalHeight
        });
    }

    /*var removeHeaderBottom = function() {
        if ($('.dmixer-menu-item').hasClass('open'))
            animateNavbarHeight(0)

        if ($('.dmixer-search-item').hasClass('open'))
            animateNavbarHeight(0)
    }
    var removeHeaderBottomMenu = function() {
        if ($('.dmixer-menu-item').hasClass('open'))
            animateNavbarHeight(0)
    }
    var removeHeaderBottomSearch = function() {
        if ($('.dmixer-search-item').hasClass('open'))
            animateNavbarHeight(0)
    }*/

    var reduceHeader = function(currentDropgownItem) {
        if ($(currentDropgownItem).hasClass('open'))
            animateNavbarHeight(0);

    }



    var addHeaderBottom = function(moreMenuHeight) {
        if ($('.dmixer-menu-item').not('.open'))
            animateNavbarHeight(moreMenuHeight);
    
            reduceHeader('.dmixer-menu-item');
    }

    var recollapseMenu = function(recollapseHeight) {
        animateNavbarHeight(recollapseHeight);
    }

    var addTopSearch = function(argument) {
        var collapsedBarHeight = $(".navbar-collapse").height();
        $(".dmixer-main-search.navbar-nav .dropdown-menu").css("top", collapsedBarHeight);
    }

    var fixBackroundMobile = function() {

        $('.navbar-toggle').on("click", (function(event) {


            $('body').toggleClass('mode-prevent-scroll');
            var bodyHeight = $('body').height();
            var navbarHeight = $('.navbar-header').height();
            $('.navbar-collapse').css({
                'max-height': bodyHeight - navbarHeight,
            })


        }));
    }

    var addDropdownHeight = function(mobileMenuHeight) {
        $('body').on("click", function(e) {

            if ($(e.target).attr('data-expanded')) ;
            else {
                reduceHeader('.dmixer-menu-item');
                reduceHeader('.dmixer-search-item');
            }
            
        });

        $('.dmixer-main-menu .dropdown-toggle').on("click", (function(event) {

            var moreMenuHeight = $('.dmixer-more-menu').height();
            addHeaderBottom(moreMenuHeight - 12);


        }));

        $('.dmixer-main-search .dropdown-toggle').on("click", (function(event) {

            var moreMenuHeight = $('.dmixer-main-search .dmixer-more-menu').height();
            var moreMenuPaddingTop = parseInt($('.dmixer-main-search .dmixer-more-menu').css('padding-top'));
            var moreMenuPaddingBottom = parseInt($('.dmixer-main-search .dmixer-more-menu').css('padding-bottom'));

            moreMenuHeight = moreMenuHeight + moreMenuPaddingTop + moreMenuPaddingBottom;

            if ($('.dmixer-menu-item').hasClass('open')) {

                recollapseMenu(moreMenuHeight);

            } else {

                addHeaderBottom(moreMenuHeight);
                reduceHeader('.dmixer-search-item');
            }
            addTopSearch();


        }));
    }
  

    function isBreakPoint(bp) { /* The breakpoints that you set in your css */

        var bps = [320, 480, 768, 1024, 1200, 1400];
        var w = $(window).width();

        var min, max;
        for (var i = 0, l = bps.length; i < l; i++) {
            if (bps[i] === bp) {
                min = bps[i - 1] || 0;
                max = bps[i];
                break;
            }
        }
        return w > min && w <= max;
    }

    $(window).on("resize", function() {

        if (isBreakPoint(320)) {
            console.log(480);

            $("#button-modal").click(function() {
                Show("modal-id");
            });

            fixBackroundMobile();

        }

        if (isBreakPoint(480)) {
            console.log(768);
            addDropdownHeight();

            $("#button-modal").click(function() {
                Show("modal-id");
            });
            fixBackroundMobile();

        }
        if (isBreakPoint(768)) {
            console.log(1024);

            $("#button-modal").click(function() {
                Show("modal-id");
            });
            fixBackroundMobile();


        }

        if (isBreakPoint(1024)) {

            console.log(1200);
                addDropdownHeight();

        }

        if (isBreakPoint(1200)) {
            console.log(1400);

            addDropdownHeight();
        }

        if (isBreakPoint(1400)) {
            console.log(2600);

            addDropdownHeight();


            $('body').attr('class', '');
        }


    }).resize();




    //Fix modal mobile Boostrap 3
    function Show(id) {
        //Fix CSS

        $(".modal-footer").css({
            "padding": "19px 20px 20px",
            "margin-top": "15px",
            "text-align": "right",
            "border-top": "1px solid #e5e5e5"
        });
        $(".modal-body").css("overflow-y", "auto");
        //Fix .modal-body height
        $('#' + id).on('shown.bs.modal', function() {
            $("#" + id + ">.modal-dialog>.modal-content>.modal-body").css("height", "auto");
            h1 = $("#" + id + ">.modal-dialog").height();
            h2 = $(window).height();
            h3 = $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height();
            h4 = h2 - (h1 - h3);
            if ($(window).width() >= 768) {


                if (h1 > h2) {
                    $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height(h4);
                }
                $("#" + id + ">.modal-dialog").css("margin", "30px auto");
                $("#" + id + ">.modal-dialog>.modal-content").css("border", "1px solid rgba(0,0,0,0.2)");
                $("#" + id + ">.modal-dialog>.modal-content").css("border-radius", 6);
                if ($("#" + id + ">.modal-dialog").height() + 30 > h2) {
                    $("#" + id + ">.modal-dialog").css("margin-top", "0px");
                    $("#" + id + ">.modal-dialog").css("margin-bottom", "0px");
                }
            } else {
                //Fix full-screen in mobiles
                $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height(h4);
                $("#" + id + ">.modal-dialog").css("margin", 0);
                $("#" + id + ">.modal-dialog>.modal-content").css("border", 0);
                $("#" + id + ">.modal-dialog>.modal-content").css("border-radius", 0);
            }
            //Aply changes on screen resize (example: mobile orientation)
            window.onresize = function() {
                $("#" + id + ">.modal-dialog>.modal-content>.modal-body").css("height", "auto");
                h1 = $("#" + id + ">.modal-dialog").height();
                h2 = $(window).height();
                h3 = $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height();
                h4 = h2 - (h1 - h3);
                if ($(window).width() >= 768) {
                    if (h1 > h2) {
                        $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height(h4);
                    }
                    $("#" + id + ">.modal-dialog").css("margin", "30px auto");
                    $("#" + id + ">.modal-dialog>.modal-content").css("border", "1px solid rgba(0,0,0,0.2)");
                    $("#" + id + ">.modal-dialog>.modal-content").css("border-radius", 6);
                    if ($("#" + id + ">.modal-dialog").height() + 30 > h2) {
                        $("#" + id + ">.modal-dialog").css("margin-top", "0px");
                        $("#" + id + ">.modal-dialog").css("margin-bottom", "0px");
                    }
                } else {
                    //Fix full-screen in mobiles
                    $("#" + id + ">.modal-dialog>.modal-content>.modal-body").height(h4);
                    $("#" + id + ">.modal-dialog").css("margin", 0);
                    $("#" + id + ">.modal-dialog>.modal-content").css("border", 0);
                    $("#" + id + ">.modal-dialog>.modal-content").css("border-radius", 0);
                }
            };
        });
        //Free event listener
        $('#' + id).on('hide.bs.modal', function() {
            window.onresize = function() {};
        });
        //Mobile haven't scrollbar, so this is touch event scrollbar implementation
        var y1 = 0;
        var y2 = 0;
        var div = $("#" + id + ">.modal-dialog>.modal-content>.modal-body")[0];
        div.addEventListener("touchstart", function(event) {
            y1 = event.touches[0].clientY;
        });
        div.addEventListener("touchmove", function(event) {
            event.preventDefault();
            y2 = event.touches[0].clientY;
            var limite = div.scrollHeight - div.clientHeight;
            var diff = div.scrollTop + y1 - y2;
            if (diff < 0) diff = 0;
            if (diff > limite) diff = limite;
            div.scrollTop = diff;
            y1 = y2;
        });
        //Fix position modal, scroll to top.  
        $('html, body').scrollTop(0);
        //Show
        $("#" + id).modal('show');
    }


    

    /*carousel.carouFredSel({

      width: "100%",
      height: "auto",
      responsive: true,
      auto: true,
      scroll: {
        items: 1,
        fx: 'scroll'
      },

      duration: 1000,
      swipe: {
        onTouch: true,
        onMouse: true
      },
      items: {
        visible: {
          min: 4,
          max: 4
        }
      },
      onCreate: function () {
        $(window).on('resize', function () {
          carousel.parent().add(carousel).height(carousel.children().first().height());
        }).trigger('resize');
      }

    });​*/

    var carousel = $("#dmixer-slider-main");
    var carouselFancyItems = $(".dmixer-slider-item").length - 1;

    //  Responsive layout, resizing the items
    // carousel.carouFredSel({
    //     responsive: true,
    //     auto: false,
    //     width: '100%',
    //     scroll: 1,
    //     items: {
    //         width: 940,
    //         height: '55.3%',  //  optionally resize item-height
    //         start: 3,
    //         visible: {
    //             min: 3,
    //             max: 3
    //         }
    //     },
    //     swipe: {
    //       onTouch: true,
    //       onMouse: true
    //     },
    //     prev: '#dmixer-main-prev',
    //     next: '#dmixer-main-next',
    //     onCreate: function() {
    //         $(window).on('resize', function() {
    //             carousel.parent().add(carousel).height(carousel.children().first().height());
    //         }).trigger('resize');
    //     }
    // });

          

    function carouselIni() {

      if ( $(window).width() < 479 ) {

        carousel.carouFredSel({
        responsive: true,
        auto: false,
        width: '100%',
        scroll: 1,
        items: {
            width: 940,
            //height: '55.3%',  //  optionally resize item-height
            start: -1,
            visible: 3
        },
        swipe: {
          onTouch: true,
          onMouse: true
        },
        prev: '#dmixer-main-prev',
        next: '#dmixer-main-next',
        onCreate: function() {
            $(window).on('resize', function() {
                carousel.parent().add(carousel).height(carousel.children().first().height());
            }).trigger('resize');
        }
    });

      } else {
          carousel.carouFredSel({
            //responsive: true,
            auto: false,
            width: '100%',
            scroll: 1,
            items: {
                width: 940,
                height: '55.3%',  //  optionally resize item-height
                start: -1,
                visible: 1
            },
            swipe: {
              onTouch: true,
              onMouse: true
            },
            prev: '#dmixer-main-prev',
            next: '#dmixer-main-next',
            onCreate: function() {
                $(window).on('resize', function() {
                    carousel.parent().add(carousel).height(carousel.children().first().height());
                }).trigger('resize');
            }
          });
        
      }

    }

    function carouselSmall() {

      if ( $(window).width() < 479 ) {
        carousel.trigger("configuration", ["items.visible", 3]);
        //carousel.trigger("configuration", ["responsive", 'true']);

      } else {
        carousel.trigger("configuration", ["items.visible", 3]);
        //carousel.trigger("configuration", ["responsive", 'false']);

      }

    }


    carouselIni();


    $(window).resize(function() {
      carouselSmall();
    });
    var carouFredSelCall = function () {    /*  Custom configuration carousel  */
   
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

      if ( isBreakPoint(2600) ) {  /* Carousel initialize  */

        carouFredSelCall();

      }
      if ( isBreakPoint(1262) ) {  /* Carousel destroy  */

        $('#carousel').empty().html(carouselContent);  

        if (postCircularCount >=3) {
          var postHeight = parseInt($('.post-item').height()) + parseInt($('.post-item').css('margin-bottom'));
          console.log(postHeight*3);
        } 
        else {
          $(this).find("view-more").addClass('hide-block')
        }

        
      }

    }).resize();

});
