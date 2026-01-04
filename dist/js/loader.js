function content(){
  var body = $("body");
  body.css("position", "initial");
}


$(window).on("DOMContentLoaded", function(){
  var loader = $(".loader");
  loader.fadeOut(500, function() {
    content();
  });
});