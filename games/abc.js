$(window).load(function() {
  $(".sk-rotating-plane").fadeOut("slow");;
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 10);
});