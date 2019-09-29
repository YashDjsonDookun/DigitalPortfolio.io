$(document).ready(function () {
	const titleText =  document.querySelector('.titleText');
    const welcomeMsg =  document.querySelector('.welcomeMsg');
    const followAlong =  document.querySelector('.followAlong');
    const aboutMein = document.querySelector('.aboutMe');
    const aboutMyCourseIn = document.querySelector('.aboutMyCourse');
	const width = $(window).width();
	
	if (width > 1666 && width > 768 ){
		splitScroll();
	}

    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $("header").css("background-color","rgba(10, 36, 47, 0.95)");
            $("header").addClass('sticky');
        } else {
            $("header").css("background-color", "transparent");
            $("header").removeClass('sticky');
        }
    });

	titleText.classList.add('animated', 'fadeInLeft');
	welcomeMsg.classList.add('animated', 'slideInUp');
	followAlong.classList.add('animated', 'zoomIn');

	$(".followAlong-btn").click(function() {
		$('html, body').animate({
		    scrollTop: $(".section-Middle").offset().top
		}, 1000)
		aboutMein.classList.add('animated', 'slideInLeft');
		aboutMyCourseIn.classList.add('animated', 'slideInRight');
	});
});

function splitScroll() {
	const controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		duration: '100%',
		triggerElement: '.aboutMe',
		triggerHook: 0
	})
	.setPin('.aboutMe')
	// .addIndicators()
	.addTo(controller);
}