$(document).foundation();


// See Owl Slider options and add comma before new options.
// http://www.owlcarousel.owlgraphic.com/docs/api-options.html
<<<<<<< HEAD

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
=======
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
  });
>>>>>>> d7a1ed8a79ace90209f470176ea353bdf319bbb7
});

// Parallax Init
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


// Scrollspeed Smoothing Plugin Init
// Increase first variable to increase movement amount
// Increase second variable to increase movement speed
<<<<<<< HEAD
jQuery.scrollSpeed(100, 500);

// Wow Custom Scrolling Intro Animations
=======
$(function() {
jQuery.scrollSpeed(100, 500);
});


// Wow Scrolling Intro Animations
>>>>>>> d7a1ed8a79ace90209f470176ea353bdf319bbb7
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
<<<<<<< HEAD
    }
  }
);

wow.init();
  document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
=======
  }
}
);
  wow.init();
    document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
>>>>>>> d7a1ed8a79ace90209f470176ea353bdf319bbb7
};
