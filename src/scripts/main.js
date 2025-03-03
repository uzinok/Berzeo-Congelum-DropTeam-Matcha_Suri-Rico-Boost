// scroll
document.querySelectorAll('a[href^="#"]:not(a[href="#"])').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
		// window.location.hash = this.getAttribute('href');
	});
});
// nav
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.header__nav .nav__list');
const navToggle = document.querySelector('.nav__button-toggle');

navToggle.addEventListener('click', () => {
	nav.classList.toggle('nav--open');
});

navList.addEventListener('click', function(e) {
	if (e.target.nodeName == 'A' && window.innerWidth <= 990) {
		nav.classList.toggle('nav--open');
	}
});

// sliders
if (document.querySelector('.hero__swiper')) {
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
}

if (document.querySelector('.natural__swiper')) {
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
}

if (document.querySelector('.standarts__swiper')) {
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
}

if (document.querySelector('.components__swiper')) {
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
}

if (document.querySelector('.review__swiper')) {
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
}

if (document.querySelector('.top-products__swiper')) {
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
}

if (document.querySelector('.products-hero__gallery')) {
	const productsHeroGallery = new Swiper('.products-hero__gallery', {
		speed: 400,
		spaceBetween: 10,

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet: function(index, className) {
				return '<span class="' + className + '" aria-label="Go to stide ' + (index + 1) + '"><img src="./img/rico_boost/products-hero-pr-' + (index + 1) + '.jpg" alt="#" aria-hidden="true"></span>';
			},
		},
	});
}

if (document.querySelector('.advantages__swiper')) {

	const advantagesSwiperElement = document.querySelector('.advantages__swiper');
	const toggleClassSwiperElement = (check) => {
		advantagesSwiperElement.querySelector('.advantages__list').classList.toggle('swiper-wrapper', check);
		advantagesSwiperElement.querySelectorAll('.advantages__item').forEach(element => {
			element.classList.toggle('swiper-slide', check);
		});
	}
	let advantagesSwiper = undefined;

	const advantagesSwiperOptions = {
		speed: 400,
		spaceBetween: 10,
		navigation: {
			nextEl: '.advantages__navigation-prev',
			prevEl: '.advantages__navigation-next',
		},

		breakpoints: {
			600: {
				slidesPerView: 2,
			},
		}
	}
	const initAdvSW = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth <= 989 && advantagesSwiper === undefined) {
			advantagesSwiper = new Swiper('.advantages__swiper', advantagesSwiperOptions);
			toggleClassSwiperElement(true);
		} else if (screenWidth > 989 && advantagesSwiper !== undefined) {
			advantagesSwiper.destroy();
			advantagesSwiper = undefined;
			toggleClassSwiperElement(false);
		}
	}

	initAdvSW();
	window.addEventListener('resize', initAdvSW)
}

if (document.querySelector('.standarts-prod__swiper')) {

	const standartsProdSwiperElement = document.querySelector('.standarts-prod__swiper');
	const toggleClassSwiperElement = (check) => {
		standartsProdSwiperElement.querySelector('.standarts-prod__list').classList.toggle('swiper-wrapper', check);
		standartsProdSwiperElement.querySelectorAll('.standarts-prod__item').forEach(element => {
			element.classList.toggle('swiper-slide', check);
		});
	}
	let standartsProdSwiper = undefined;

	const options = {
		speed: 400,
		spaceBetween: 10,
		navigation: {
			nextEl: '.standards__navigation-prev',
			prevEl: '.standards__navigation-next',
		},

		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 26,
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 26,
			}
		}
	}

	const initAdvSW = () => {
		console.log('initAdvSW');

		const screenWidth = window.innerWidth;

		if (screenWidth <= 989 && standartsProdSwiper === undefined) {
			toggleClassSwiperElement(true);
			standartsProdSwiper = new Swiper('.standarts-prod__swiper', options);
		} else if (screenWidth > 989 && standartsProdSwiper !== undefined) {
			toggleClassSwiperElement(false);
			standartsProdSwiper.destroy();
			standartsProdSwiper = undefined;
		}
	}

	initAdvSW();
	window.addEventListener('resize', initAdvSW)
	// const standartsProdSwiper = new Swiper('.standarts-prod__swiper', options);
}

// details
window.addEventListener('load', () => {
	const detailsList = document.querySelectorAll('.details');
	detailsList.forEach(elem => {
		let details = new Details(elem, 300);
	});
});
