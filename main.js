// const button = document.querySelector("button");
// const text = document.querySelector("input");
// const currentTemp = document.querySelector("#current-temp");
// const feelsLike = document.querySelector("#feels-like");
// const highTemp = document.querySelector("#high");
// const lowTemp = document.querySelector("#low");
// const clouds = document.querySelector("#clouds");
// const foundLocation = document.querySelector("#location");
// const icon = document.querySelector("#icon");

// navigator.geolocation.getCurrentPosition(success, error);

// function success(position) {
// 	const latitude = position.coords.latitude;
// 	const longitude = position.coords.longitude;
// 	fetch(
// 		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ca4997f7b83bdf4f56c268b78eab82da&units=imperial`,
// 		{ mode: "cors" }
// 	)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (response) {
// 			currentTemp.innerText = response.main.temp;
// 			feelsLike.innerText = response.main.feels_like;
// 			highTemp.innerText = response.main.temp_max;
// 			lowTemp.innerText = response.main.temp_min;
// 			clouds.innerText = response.clouds.all;
// 			foundLocation.innerText = response.name;
// 			icon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png)`;
// 			console.log(response.weather[0].icon);
// 		});
// }
// function error() {
// 	p.innerText = "Error";
// }

// button.addEventListener("click", getWeatherData);

// function getWeatherData() {
// 	fetch(
// 		`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=ca4997f7b83bdf4f56c268b78eab82da&units=imperial`,
// 		{ mode: "cors" }
// 	)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (response) {
// 			currentTemp.innerText = response.main.temp;
// 			feelsLike.innerText = response.main.feels_like;
// 			highTemp.innerText = response.main.temp_max;
// 			lowTemp.innerText = response.main.temp_min;
// 			clouds.innerText = response.clouds.all;
// 			foundLocation.innerText = response.name;
// 			icon.innerText = response.weather;

// 			console.log(response);
// 		});
// }