jQuery(function ($) {
  $('.card-post-slider').slick({
  	  arrows: true,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  // variableWidth: true,
	  responsive: [
	    {
	      breakpoint: 1199.98,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 980,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 740,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

  $('.card-comment-slider').slick({
  	  arrows: true,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // variableWidth: true,
	  responsive: [
	    {
	      breakpoint: 1199.98,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 980,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 740,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // rows: 2,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  arrows: false,
  focusOnSelect: true
});


$('#phone-menu>.menu-item>a').prepend('<i class="fa"></i> ');
$('#phone-menu>.menu-item>.sub-menu>.menu-item>a').prepend('<i class="fa"></i> ');
$('#text-2>div>p').prepend('<i class="fa"></i> ');
$('#category-menu>li>a').append('<i class="fa"></i> ');
$('#phone-menu>li>a').append('<i class="fa"></i> ');

$(document).ready(function () {

		$('.btn').click(function () {
			$('.header-info').slideToggle(200);
	    });
	    if ($(window).width() < 920) {
	    	$('.header-info').slideUp(0);
	    }
	    $('#menu-item-1847').click(function () {
	        $(this).children('.sub-menu').slideToggle(200);
	    });
	    $('.sub-menu').slideUp(200);

	    $('#phone-menu>li').click(function () {
	        $(this).children('.sub-menu').slideToggle(200);
	    });
	    $('.sub-menu').slideUp(200);
	});

var Menu = {
  
  el: {
    ham: $('.btn'),
    menuTop: $('.btn-top'),
    menuMiddle: $('.btn-middle'),
    menuBottom: $('.btn-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('btn-top-click');
    Menu.el.menuMiddle.toggleClass('btn-middle-click');
    Menu.el.menuBottom.toggleClass('btn-bottom-click'); 
  }
};

Menu.init();

});






/* Modal */
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("has-vivid-red-color");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for (let i = 0; i < btn.length; i++) {
btn[i].onclick = function() {
    modal.style.display = "block";
}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


