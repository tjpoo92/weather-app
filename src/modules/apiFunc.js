import { convToC, convToF } from "./conversion";
import { renderTemp } from "./render";

const helpText = document.querySelector(".help-text");

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
		`https://api.openweathermap.org/data/2.5/weather?q=${userText}&appid=ca4997f7b83bdf4f56c268b78eab82da`,
		{ mode: "cors" }
	)
		.then(function (response) {
			if (response.status >= 200 && response.status <= 299) {
				return response.json();
			} else {
				throw response.statusText;
			}
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
		})
		.catch((error) => {
			console.error(error);
			helpText.innerHTML = `Location not found <br /> Try including your country code to achieve better results`;
			helpText.style.display = "inline";
		});
}

export { getWeatherData, success, error, helpText };
