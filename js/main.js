window.addEventListener('load', () => {
	document.querySelector('#homeAnimation h1').classList.add('animated');
	setTimeout(() => {
		document.querySelector('#homeAnimation h2').classList.add('animated');
	}, 300)
});

; (function () {
	$("#datetimePicker").flatpickr({
		locale: "ru",
		enableTime: true,
		dateFormat: "d-m-Y H:i",
		time_24hr: true,
		minuteIncrement: 1,
		minDate: new Date()
	});

	var parallax = function () {
		$(window).stellar();

	};

	var scrolledWindow = function () {
		$(window).scroll(function () {
			const scrollPos = $(this).scrollTop();

			const maxShift = 200;
			const maxScroll = 500;

			const shift = Math.min(scrollPos / 4, maxShift);
			const opacity = Math.max(1 - scrollPos / maxScroll, 0);

			$('#homeAnimation').css({
				'transform': `translateY(${shift}px)`,
				'opacity': opacity
			});
		});
	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};

	var aboutAnimate = function () {
		var about = $('#about');
		if (about.length > 0) {

			about.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						about.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						about.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);



					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var sayingsAnimate = function () {
		var sayings = $('#sayings');
		if (sayings.length > 0) {

			sayings.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						sayings.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);


					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var featureAnimate = function () {
		var feature = $('#featured');
		if (feature.length > 0) {

			feature.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						feature.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						feature.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('bounceIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 500);


					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var typeAnimate = function () {
		var type = $('#type');
		if (type.length > 0) {

			type.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						type.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var foodMenusAnimate = function () {
		var menus = $('#menus');
		if (menus.length > 0) {

			menus.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						menus.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						menus.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 500);

					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var eventsAnimate = function () {
		var events = $('#events');
		if (events.length > 0) {

			events.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						events.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						events.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 500);

					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};

	var reservationAnimate = function () {
		var contact = $('#contact');
		if (contact.length > 0) {

			contact.waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {


					setTimeout(function () {
						contact.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						contact.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 500);

					$(this.element).addClass('animated');

				}
			}, { offset: '80%' });

		}
	};


	// Document on load.
	$(function () {
		parallax();
		scrolledWindow();
		goToTop();

		// Animations
		aboutAnimate();
		sayingsAnimate();
		featureAnimate();
		typeAnimate();
		foodMenusAnimate();
		eventsAnimate();
		reservationAnimate();

		new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	});


}());