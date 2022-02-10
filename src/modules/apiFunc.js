import { convToC, convToF } from "./conversion";
import { renderTemp } from "./render";

//API call using browser provided location (async/await)

async function success(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ca4997f7b83bdf4f56c268b78eab82da`,
		{ mode: "cors" }
	);
	const resolve = await response.json();
	const temperatureArray = [
		resolve.main.temp,
		resolve.main.feels_like,
		resolve.main.temp_max,
		resolve.main.temp_min,
	];
	const foundLocationText = resolve.name;
	const weatherDescription = resolve.weather[0].main;
	const iconValue = resolve.weather[0].icon;

	renderTemp(
		convToF(temperatureArray),
		convToC(temperatureArray),
		foundLocationText,
		weatherDescription,
		iconValue
	);
}
function error() {
	console.warn("Error from browser provided location");
}

//API call using user entered location (promises)
function getWeatherData(userText) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${userText.value}&appid=ca4997f7b83bdf4f56c268b78eab82da`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			const temperatureArray = [
				response.main.temp,
				response.main.feels_like,
				response.main.temp_max,
				response.main.temp_min,
			];
			const foundLocationText = response.name;
			const weatherDescription = response.weather[0].main;
			const iconValue = response.weather[0].icon;
			renderTemp(
				convToF(temperatureArray),
				convToC(temperatureArray),
				foundLocationText,
				weatherDescription,
				iconValue
			);
		});
}

export { getWeatherData, success, error };
