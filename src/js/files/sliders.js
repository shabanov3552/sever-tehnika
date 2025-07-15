/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar, Thumbs } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.class')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.class', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.mp-makers__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.mp-makers__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.mp-makers__main .swiper-button_prev',
				nextEl: '.mp-makers__main .swiper-button_next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 'auto',
				},
				991.98: {
					slidesPerView: 3,
				},
				1199.98: {
					slidesPerView: 5,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.popular-categories__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.popular-categories__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 26,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.popular-categories__nav .swiper-button_prev',
				nextEl: '.popular-categories__nav .swiper-button_next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 'auto',
				},
				991.98: {
					slidesPerView: 3,
				},
				1199.98: {
					slidesPerView: 4,
				},
			},

			// События
			// on: {

			// }
		});
	}

	if (document.querySelector('.products__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let swiper = new Swiper('.products__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 35,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button_prev',
				nextEl: '.swiper-button_next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 'auto',
					spaceBetween: 30,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1399.98: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});

		function moveElement(slider) {
			if (slider.el.closest('.product-detail-slider')) {
				const parrentBlockHeader = slider.el.closest('.product-detail-slider').querySelector('.product-detail-slider__header');

				parrentBlockHeader.append(slider.el.querySelector('.swiper__nav'))
			}
		}

		if (swiper.length > 0) {
			swiper.forEach(slider => {
				moveElement(slider)
			})
		} else {
			moveElement(swiper)
		}
	}

	if (document.querySelector('.catalog-preview__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.catalog-preview__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.catalog-preview__slider .swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			// on: {

			// }
		});
	}

	if (document.querySelector('.product-detail__gallery-main')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiperThumbs = new Swiper(".product-detail__gallery-thumbs", {
			spaceBetween: 25,
			slidesPerView: 'auto',
			freeMode: true,
			watchSlidesProgress: true,
			direction: 'vertical',
			breakpoints: {
				320: {
					direction: 'horizontal',
				},
				1199.98: {
					direction: 'vertical',
				}
			}
		});

		var swiper2 = new Swiper(".product-detail__gallery-main", {
			modules: [Navigation, Thumbs],
			spaceBetween: 20,
			navigation: {
				nextEl: ".product-detail__gallery-nav .swiper-button_next",
				prevEl: ".product-detail__gallery-nav .swiper-button_prev",
			},
			thumbs: {
				swiper: swiperThumbs,
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});