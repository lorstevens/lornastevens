$(document).on('mouseenter.hover-reveal','.hover-reveal', function (e){
      $(e.target).closest('.card').css('overflow', 'hidden');
      $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
      $(this).find('.card-reveal').css({ display: 'block'})
        .velocity("stop", false)
        .velocity({translateY: '-100%'},
        {duration: 300,
         queue: false,
         easing: 'easeInOutQuad'});
    });





(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#download-button').click(function() {
      $('html, body').animate({
        scrollTop: $(".intro").offset().top
      }, 2000);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space 

(function() {

  function onScrollAnimations() {
    var inview = new Waypoint.Inview({
      element: $('.img1')[0],
      entered: function(direction) {
        $('.img1').addClass('slideIn1');
      }
    })
    var inview = new Waypoint.Inview({
      element: $('.img2')[0],
      entered: function(direction) {
        $('.img2').addClass('slideIn2');
      }
    })
    var inview = new Waypoint.Inview({
      element: $('.img3')[0],
      entered: function(direction) {
        $('.img3').addClass('slideIn3');
      }
    })

    var inview = new Waypoint.Inview({
      element: $('.text1')[0],
      entered: function(direction) {
        $('.text1').addClass('bounceIn1');
      },
      exited: function(direction) {
        // $('.text1').removeClass('bounceIn1');
      }
    })
    var inview = new Waypoint.Inview({
      element: $('.text2')[0],
      entered: function(direction) {
        $('.text2').addClass('bounceIn2');
      },
      exited: function(direction) {
        // $('.text2').removeClass('bounceIn2');
      }
    })
    var inview = new Waypoint.Inview({
      element: $('.text3')[0],
      entered: function(direction) {
        $('.text3').addClass('bounceIn3');
      },
      exited: function(direction) {
        // $('.text3').removeClass('bounceIn3');
      }
    })
    var inview = new Waypoint.Inview({
      element: $('.wp1')[0],
      entered: function(direction) {
        $('.wp1').addClass('slideInLeft'); 
      }
    })
      var inview = new Waypoint.Inview({
      element: $('.wp2')[0],
      entered: function(direction) {
        $('.wp2').addClass('slideInRight'); 
      }
    })
        var inview = new Waypoint.Inview({
      element: $('.wp3')[0],
      entered: function(direction) {
        $('.wp3').addClass('slideInLeft'); 
      }
    })
          var inview = new Waypoint.Inview({
      element: $('.wp4')[0],
      entered: function(direction) {
        $('.wp4').addClass('slideInRight'); 
      }
    })

  } // onScrollAnimations();

  onScrollAnimations();

  jQuery('.btn').on('click', function() {
   event.preventDefault();
    jQuery(this).addClass('shake'); 
    setTimeout(function() {
          jQuery('.btn').removeClass('shake'); 
    },1100);
  });
  
    jQuery('.btn_meer').on('click', function() {
   event.preventDefault();
    jQuery('html, body').animate({
      scrollTop : jQuery('.contact1').offset().top
         },2500); 
  });
  
 
  
  
 
}())

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
var something = document.getElementById('canvas');
var dimensions = something.getClientRects()[0];
var pattern = Trianglify({
    width: dimensions.width, 
    height: dimensions.height
});
something.appendChild(pattern.canvas()); 
   

// smoooth
  window.smoothScroll = function() {
      if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
          return
      }
      var e = function(e) {
          if (e.nodeName === "HTML") return -window.pageYOffset;
          return e.getBoundingClientRect().top + window.pageYOffset
      };
      var t = function(e) {
          return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
      };
      var n = function(e, n, r, i) {
          if (r > i) return n;
          return e + (n - e) * t(r / i)
      };
      var r = function(t, r, i) {
          r = r || 500;
          var s = window.pageYOffset;
          if (typeof t === "number") {
              var o = parseInt(t)
          } else {
              var o = e(t)
          }
          var u = Date.now();
          var a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
              window.setTimeout(e, 15)
          };
          var f = function() {
              var e = Date.now() - u;
              window.scroll(0, n(s, o, e, r));
              if (e > r) {
                  if (typeof i === "function") {
                      i(t)
                  }
              } else {
                  a(f)
              }
          };
          f()
      };
      var i = function(e) {
          e.preventDefault();
          if (location.hash !== this.hash) window.history.pushState(null, null, this.hash);
          r(document.getElementById(this.hash.substring(1)), 500, function(e) {
              location.replace("#" + e.id)
          })
      };
      document.addEventListener("DOMContentLoaded", function() {
          var e = document.querySelectorAll('a[href^="#"]'),
              t;
          for (var n = e.length; t = e[--n];) {
              t.addEventListener("click", i, false)
          }
      });
      return r
  }();