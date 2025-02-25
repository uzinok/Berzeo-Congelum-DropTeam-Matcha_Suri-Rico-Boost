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
