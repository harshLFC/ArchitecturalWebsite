$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$('.navbar').removeClass('navbar-dark').addClass('navbar-light');
			$('.navbar .navbar-brand img').attr('src', 'img/fav.png');
		}

		else {
			$('.navbar').removeClass('navbar-light').addClass('navbar-dark');
			$('.navbar .navbar-brand img').attr('src', 'img/logo.png');
		}
	})
})

$(".navbar a").on("click", function () {
	$(".navbar").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});



var granimInstance = new Granim({
	element: '#canvas-basic',
	name: 'basic-gradient',
	direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
	opacity: [1, 1],
	isPausedWhenNotInView: true,
	states: {
		"default-state": {
			gradients: [
				['#360033', '#0b8793'],
				['#33001b', '#ff0084'],
				['#1a2a6c', '#b21f1f'],
				['#cc2b5e', '#753a88'],
				['#ee0979', '#ff6a00']
			]
		}
	}
});