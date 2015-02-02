$(document).ready(function() {


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
            addHeaderBottom(moreMenuHeight);

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

            var collapsedBarHeight = $(".navbar-collapse").height();
            $(".dmixer-main-search.navbar-nav .dropdown-menu").css("top", collapsedBarHeight);

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


        }

        if (isBreakPoint(480)) {
            console.log(768);
            addDropdownHeight();



        }
        if (isBreakPoint(768)) {
            console.log(1024);


        }

        if (isBreakPoint(1024)) {
            console.log(1200);
                addDropdownHeight();

        }

        if (isBreakPoint(1200)) {
            console.log(2600);

            addDropdownHeight();
        }

        if (isBreakPoint(1400)) {
            console.log(2600);

            addDropdownHeight();


        }

    }).resize();






});
