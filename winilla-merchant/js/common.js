$(function() {

	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('._download').on('click', function() {
		$('body').scrollTo('#install-block-mini', 2000);
	});

	var waypoint = new Waypoint({
		element: document.getElementById('phoneCallback'),
		handler: function(direction) {
			if(direction === "down")
			{
				$('#install-block-description').animateCss('lightSpeedIn');
				$('#install-block-subdescription').animateCss('bounce');

				$('._install-block.mini ._buttons_wrapper ._button').animateCss('zoomIn');
			}
		}
	});
});

slideInitialized = false;

function sliderInit() {

	if(slideInitialized) {
		$('._reviews_slider_wrapper').hide();
	}

	if (window.innerWidth > 1200) {
		$('#slides').slidesjs({
			width: 940,
			height: 428,
			start: 1,
			navigation: {
				active: false
			},
			pagination: {
				active: false
			}
		});

		if(slideInitialized) {
			$('._reviews_slider_wrapper').show();
		}

		slideInitialized = true;
	}
}

this.sliderInit();

window.addEventListener('resize', function(event){
	this.sliderInit();

	console.log(window.innerWidth);

	console.log('RESIZED');
});
