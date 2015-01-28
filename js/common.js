$(document).ready(function() {

    function isBreakPoint(bp) { /* The breakpoints that you set in your css */

        var bps = [320, 480, 768, 1024, 1200, 2600];
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

    var removeHeaderBottom = function() {
        if ($('.dmixer-menu-item').hasClass('open'))
            animateNavbarHeight(0)

        if ($('.dmixer-search-item').hasClass('open'))
            animateNavbarHeight(0)
    }

    var addHeaderBottom = function(moreMenuHeight) {
        if ($('.dmixer-menu-item').not('.open'))
            animateNavbarHeight(moreMenuHeight)
    }

    var hideMainMenuElements = function() {
      $('.dmixer-main-search .dropdown-toggle').on("click", (function(event) {
        $('.dmixer-main-navbar').addClass('dmixer-collapsed-in');
      }));
    }

    var addDropdownHeight = function(mobileMenuHeight) {
        $('body').on("click", function() {
            removeHeaderBottom();
        });

        $('.dmixer-main-menu .dropdown-toggle').on("click", (function(event) {
            /*event.stopPropagation();*/
            var moreMenuHeight = $('.dmixer-more-menu').height();
            addHeaderBottom(moreMenuHeight);

        }));

        $('.dmixer-main-search .dropdown-toggle').on("click", (function(event) {
            /*event.stopPropagation();*/
            var moreMenuHeight = $('.dmixer-main-search .dmixer-more-menu').height();
            var moreMenuPaddingTop = parseInt($('.dmixer-main-search .dmixer-more-menu').css('padding-top'));
            var moreMenuPaddingBottom = parseInt($('.dmixer-main-search .dmixer-more-menu').css('padding-bottom'));

            moreMenuHeight = moreMenuHeight + moreMenuPaddingTop + moreMenuPaddingBottom + mobileMenuHeight;
            addHeaderBottom(moreMenuHeight);
            var collapsedBarHeight = $(".navbar-collapse").height();
            $(".dmixer-main-search.navbar-nav .dropdown-menu").css("top", collapsedBarHeight);

        }));
    }

    var preventScrollBgMobile = function() {
        $('body').css({
              'overflow':'hidden'

            });
        /*$('#dmixer-navbar-collapsed').on("click",function(){
          
          if ($('#dmixer-navbar-collapsed').hasClass('collapse')) console.log('test');
          
        });*/
        
    }


    $(window).on("resize", function() {

        if (isBreakPoint(320)) {
          $("#button-modal").click(function(){
              Show("modal-id");
          });
          preventScrollBgMobile();
        }

        if (isBreakPoint(480)) {
          $("#button-modal").click(function(){
              Show("modal-id");
          });
          preventScrollBgMobile();
        }
        if (isBreakPoint(768)) {
          $("#button-modal").click(function(){
              Show("modal-id");
          });
          preventScrollBgMobile();
        }
        
        if (isBreakPoint(1024)) {
            addDropdownHeight(0);
        }
        
        if (isBreakPoint(1200)) {
            addDropdownHeight(0);
        }

        if (isBreakPoint(2600)) {
            addDropdownHeight(0);
        }

    }).resize();

//Fix modal mobile Boostrap 3
function Show(id){
  //Fix CSS
  $(".modal-footer").css({"padding":"19px 20px 20px","margin-top":"15px","text-align":"right","border-top":"1px solid #e5e5e5"});
  $(".modal-body").css("overflow-y","auto");
  //Fix .modal-body height
  $('#'+id).on('shown.bs.modal',function(){
    $("#"+id+">.modal-dialog>.modal-content>.modal-body").css("height","auto");
    h1=$("#"+id+">.modal-dialog").height();
    h2=$(window).height();
    h3=$("#"+id+">.modal-dialog>.modal-content>.modal-body").height();
    h4=h2-(h1-h3);    
    if($(window).width()>=768){
      if(h1>h2){
        $("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
      }
      $("#"+id+">.modal-dialog").css("margin","30px auto");
      $("#"+id+">.modal-dialog>.modal-content").css("border","1px solid rgba(0,0,0,0.2)");
      $("#"+id+">.modal-dialog>.modal-content").css("border-radius",6);       
      if($("#"+id+">.modal-dialog").height()+30>h2){
        $("#"+id+">.modal-dialog").css("margin-top","0px");
        $("#"+id+">.modal-dialog").css("margin-bottom","0px");
      }
    }
    else{
      //Fix full-screen in mobiles
      $("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
      $("#"+id+">.modal-dialog").css("margin",0);
      $("#"+id+">.modal-dialog>.modal-content").css("border",0);
      $("#"+id+">.modal-dialog>.modal-content").css("border-radius",0); 
    }
    //Aply changes on screen resize (example: mobile orientation)
    window.onresize=function(){
      $("#"+id+">.modal-dialog>.modal-content>.modal-body").css("height","auto");
      h1=$("#"+id+">.modal-dialog").height();
      h2=$(window).height();
      h3=$("#"+id+">.modal-dialog>.modal-content>.modal-body").height();
      h4=h2-(h1-h3);
      if($(window).width()>=768){
        if(h1>h2){
          $("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
        }
        $("#"+id+">.modal-dialog").css("margin","30px auto");
        $("#"+id+">.modal-dialog>.modal-content").css("border","1px solid rgba(0,0,0,0.2)");
        $("#"+id+">.modal-dialog>.modal-content").css("border-radius",6);       
        if($("#"+id+">.modal-dialog").height()+30>h2){
          $("#"+id+">.modal-dialog").css("margin-top","0px");
          $("#"+id+">.modal-dialog").css("margin-bottom","0px");
        }
      }
      else{
        //Fix full-screen in mobiles
        $("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
        $("#"+id+">.modal-dialog").css("margin",0);
        $("#"+id+">.modal-dialog>.modal-content").css("border",0);
        $("#"+id+">.modal-dialog>.modal-content").css("border-radius",0); 
      }
    };
  });  
  //Free event listener
  $('#'+id).on('hide.bs.modal',function(){
    window.onresize=function(){};
  });  
  //Mobile haven't scrollbar, so this is touch event scrollbar implementation
  var y1=0;
  var y2=0;
  var div=$("#"+id+">.modal-dialog>.modal-content>.modal-body")[0];
  div.addEventListener("touchstart",function(event){
    y1=event.touches[0].clientY;
  });
  div.addEventListener("touchmove",function(event){
    event.preventDefault();
    y2=event.touches[0].clientY;
    var limite=div.scrollHeight-div.clientHeight;
    var diff=div.scrollTop+y1-y2;
    if(diff<0)diff=0;
    if(diff>limite)diff=limite;
    div.scrollTop=diff;
    y1=y2;
  });
  //Fix position modal, scroll to top.  
  $('html, body').scrollTop(0);
  //Show
  $("#"+id).modal('show');
}


});
