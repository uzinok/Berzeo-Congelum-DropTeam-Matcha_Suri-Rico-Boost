document.querySelectorAll('a[href^="#"]:not(a[href="#"])').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
		// window.location.hash = this.getAttribute('href');
	});
});

const heroSwiper = new Swiper('.hero__swiper', {
	speed: 400,
	spaceBetween: 14,
	navigation: {
		nextEl: '.hero__navigation-prev',
		prevEl: '.hero__navigation-next',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 1,
			spaceBetween: 23,
		}
	}
});

const naturalSwiper = new Swiper('.natural__swiper', {
	speed: 400,
	spaceBetween: 14,
	navigation: {
		nextEl: '.natural__navigation-prev',
		prevEl: '.natural__navigation-next',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 23,
		},
		1253: {
			slidesPerView: 1
		}
	}
});

const standartsSwiper = new Swiper('.standarts__swiper', {
	speed: 400,
	spaceBetween: 10,
	navigation: {
		nextEl: '.standards__navigation-prev',
		prevEl: '.standards__navigation-next',
	},

	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		850: {
			slidesPerView: 3,
		},
		989: {
			slidesPerView: 333,
			slidesPerView: 4
		}
	}
});

const componentsSwiper = new Swiper('.components__swiper', {
	speed: 400,
	spaceBetween: 24,
	navigation: {
		nextEl: '.components__navigation-prev',
		prevEl: '.components__navigation-next',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 45,
		},
		1253: {
			slidesPerView: 1
		}
	}
});

const reviewSwiper = new Swiper('.review__swiper', {
	speed: 400,
	spaceBetween: 10,
	navigation: {
		nextEl: '.review__navigation-prev',
		prevEl: '.review__navigation-next',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 44,
		},
		1253: {
			slidesPerView: 1
		}
	}
});

const topProductsSwiper = new Swiper('.top-products__swiper', {
	speed: 400,
	spaceBetween: 18,
	navigation: {
		nextEl: '.top-products__navigation-prev',
		prevEl: '.top-products__navigation-next',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		1253: {
			slidesPerView: 4
		}
	}
});
