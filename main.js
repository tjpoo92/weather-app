navigator.geolocation.getCurrentPosition(success, error);

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
	const iconValue = resolve.weather[0].icon;
}
function error() {
	console.warn("Error from browser provided location");
}
