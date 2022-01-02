const button = document.querySelector("button");
const text = document.querySelector("input");
const p = document.querySelector("p");
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ca4997f7b83bdf4f56c268b78eab82da&units=imperial`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			p.innerText = response.main.temp;
			console.log(response.main.temp);
		});
}
function error() {
	p.innerText = "Error";
}

button.addEventListener("click", getWeatherData);

function getWeatherData() {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=ca4997f7b83bdf4f56c268b78eab82da&units=imperial`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			p.innerText = response.main.temp;
			console.log(response.main.temp);
		});
}
