$(window).on('load', function() {

    $("#all").addClass("selected");

    $('.iso-grid').isotope({
      // options
      itemSelector: '.project',
      originLeft: true,
      stagger: 30,
      originTop: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      }
    });

  });

  $( "#all").click(function() {
    $('.iso-grid').isotope({ filter: '*' });

    if ($(".projects-filter").children().hasClass("selected")) {
       $(".projects-filter").children().removeClass("selected");
    }

    $("#all").addClass("selected");

  });  

  $( "#digital").click(function() {
    $('.iso-grid').isotope({ filter: '.ux' });

    if ($(".projects-filter").children().hasClass("selected")) {
       $(".projects-filter").children().removeClass("selected");
    }

    $("#digital").addClass("selected");
      

  });

  $( "#logo").click(function() {
    $('.iso-grid').isotope({ filter: '.logo' });

    if ($(".projects-filter").children().hasClass("selected")) {
       $(".projects-filter").children().removeClass("selected");
    }

    $("#logo").addClass("selected");

    
  });

  $( "#print").click(function() {
    $('.iso-grid').isotope({ filter: '.print' });

    if ($(".projects-filter").children().hasClass("selected")) {
       $(".projects-filter").children().removeClass("selected");
    }

    $("#print").addClass("selected");

      
  });