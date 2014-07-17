
// Menu ______________________________________________________
$(function() {
  //if (navigator.userAgent.toLowerCase().indexOf('msie 6') != -1)
  if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
    $('li').has('ul').mouseover(function() {
      $(this).children('ul').css('visibility', 'visible');
    }).mouseout(function() {
      $(this).children('ul').css('visibility', 'hidden');
    });
  }
  /* Mobile */
  $('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
  $("#menu-trigger").on("click", function() {
    $("#menu").slideToggle();
  });
  // iPad
  var isiPad = navigator.userAgent.match(/iPad/i) !== null;
  if (isiPad) $('#menu ul').addClass('no-transition');
});

// Collapse ______________________________________________________
$(".collapsible").collapse({
  accordion: true,
  open: function() {
    this.addClass("open");
    this.css({
      height: this.children().outerHeight()
    });
  },
  close: function() {
    this.css({
      height: "0px"
    });
    this.removeClass("open");
  }
});