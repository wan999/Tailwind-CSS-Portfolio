$('#button').click(function() {
    var menu = $("#mobile-menu");

    if (menu.is(":visible") ) {
        menu.addClass("hidden");
    } else {
        menu.removeClass("hidden");
    }
});