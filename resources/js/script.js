    
$(document).ready(function() {
    
        /* For the sticky navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.section-features'),
        handler: function(direction) {
          if(direction == "down"){
                $('nav').addClass('stick');
          } else{
                $('nav').removeClass('stick');
          }
        },
        offset: 60
    });


    /* Mobile nav */
    $('.mobile-nav-icon').click(function(){
      var nav = $('.main-nav');
      var icon = document.querySelector('.mobile-nav-icon-btn');

      nav.slideToggle(200)

      if (icon.name == 'menu') {
          icon.name = 'close';
      }else{
          icon.name = 'menu';
      }

      });


          /* Button click */
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.section-plans').offset().top - 50}, 1000);
    });
        $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.section-features').offset().top - 50}, 1000);
    });

    /* Animation */
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    },{ offset: '70%'});
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    },{ offset: '50%'});
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animate__animated animate__zoomIn')
    },{ offset: '50%'});
    

});