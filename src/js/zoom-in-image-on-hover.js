$(window).on('load', function() {
    
    const thumbnails = document.querySelectorAll(".thumb-img");

    thumbnails.forEach(element => {
        element.addEventListener("mouseover", function (){
            element.style.backgroundSize = "125%";
        })
    });

    thumbnails.forEach(element => {
        element.addEventListener("mouseleave", function (){
            element.style.backgroundSize = "100%";
        })
    });

});


