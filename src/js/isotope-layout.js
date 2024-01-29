$(window).on('load', function() {
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
    

  });  

  $( "#digital").click(function() {
    $('.iso-grid').isotope({ filter: '.ux' });
      

  });

  $( "#logo").click(function() {
    $('.iso-grid').isotope({ filter: '.logo' });
    
  });

  $( "#print").click(function() {
    $('.iso-grid').isotope({ filter: '.print' });
      
  });