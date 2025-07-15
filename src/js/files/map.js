
if (document.querySelector('#map')) {
	mapAdd();
	function mapAdd() {
		let tag = document.createElement('script');
		tag.src = "https://api-maps.yandex.ru/v3/?apikey=0aa2f6b6-353d-4a10-bb62-97763a975ef4&lang=ru_RU";
		let firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		tag.onload = () => initMap();
	}

	async function initMap() {
		await ymaps3.ready;

		const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;

		// Иницилиазируем карту
		const map = new YMap(document.getElementById('map'), {
			location: {
				center: [92.90787569836425, 55.99501215493129],
				zoom: 15
			}
		});

		// Добавляем слой для отображения схематической карты
		map.addChild(new YMapDefaultSchemeLayer());
		// Добавляем слой объектов (чтобы работали маркеры)
		const featureLayer = new YMapDefaultFeaturesLayer();
		map.addChild(featureLayer);

		const content = document.createElement('section');
		content.append('qwe');


		function createMarkerElement() {
			const nodeElement = document.createElement('img');
			nodeElement.src = 'img/icons/map-marker.svg'
			nodeElement.style.cssText = `transform: translate(-19px, -53px);width: 43px;height: 57px;`
			return nodeElement
		}

		const markerShop = new YMapMarker({ coordinates: [92.90420699999999, 55.99829256873454], }, createMarkerElement());
		const markerStock = new YMapMarker({ coordinates: [92.914313, 55.99335856872182], }, createMarkerElement());

		map.addChild(markerShop);
		map.addChild(markerStock);
	}
}


