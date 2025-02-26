document.querySelectorAll('a[href^="#"]:not(a[href="#"])').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
		// window.location.hash = this.getAttribute('href');
	});
});


const naturalSwiper = new Swiper('.natural__swiper', {
	speed: 400,
	spaceBetween: 14,

	breakpoints: {
		990: {
			spaceBetween: 23,
		}
	}
});

const standartsSwiper = new Swiper('.standarts__swiper', {
	speed: 400,
	spaceBetween: 10,

	breakpoints: {
		989: {
			slidesPerView: 333,
		}
	}
});

const componentsSwiper = new Swiper('.components__swiper', {
	speed: 400,
	spaceBetween: 24,

	breakpoints: {
		990: {
			spaceBetween: 45,
		}
	}
});

const reviewSwiper = new Swiper('.review__swiper', {
	speed: 400,
	spaceBetween: 10,

	breakpoints: {
		990: {
			spaceBetween: 44,
		}
	}
});

const topProductsSwiper = new Swiper('.top-products__swiper', {
	speed: 400,
	spaceBetween: 18,

	breakpoints: {
		990: {
			spaceBetween: 14,
		}
	}
});
