const tempContainer = document.querySelector(".temp-flex-container");
const searchContainer = document.querySelector(".search-flex-container");
const currentTemp = document.querySelector("#current-temp");
const feelsLike = document.querySelector("#feels-like");
const highTemp = document.querySelector("#high");
const lowTemp = document.querySelector("#low");
let _switch = true;

function renderTemp(
	fahrenheitArray,
	celsiusArray,
	foundLocationText,
	weatherDescription,
	iconValue
) {
	tempContainer.style.display = "flex";
	searchContainer.style.display = "none";
	renderfahrenheit(fahrenheitArray);
	document.querySelector(
		"#location"
	).innerHTML = `<i class="fas fa-search-location"></i> ${foundLocationText}`;
	document.querySelector("#description").innerText = weatherDescription;
	document.querySelector(
		"#icon"
	).style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconValue}@2x.png)`;
	currentTemp.addEventListener(
		"click",
		switchTemp.bind(this, celsiusArray, fahrenheitArray)
	);
	feelsLike.addEventListener(
		"click",
		switchTemp.bind(this, celsiusArray, fahrenheitArray)
	);
	document
		.querySelector(".loc-container")
		.addEventListener("click", renderSearch);
}

function renderSearch() {
	tempContainer.style.display = "none";
	searchContainer.style.display = "flex";
}

function renderfahrenheit(fahrenheitArray) {
	currentTemp.innerText = `${fahrenheitArray[0]}\u2109`;
	feelsLike.innerText = `${fahrenheitArray[1]}\u2109`;
	highTemp.innerText = fahrenheitArray[2];
	lowTemp.innerText = fahrenheitArray[3];
	_switch = true;
}

function rendercelsius(celsiusArray) {
	currentTemp.innerText = `${celsiusArray[0]}\u2103`;
	feelsLike.innerText = `${celsiusArray[1]}\u2103`;
	highTemp.innerText = celsiusArray[2];
	lowTemp.innerText = celsiusArray[3];
	_switch = false;
}

function switchTemp(celsiusArray, fahrenheitArray) {
	return _switch
		? rendercelsius(celsiusArray)
		: renderfahrenheit(fahrenheitArray);
}

export { renderTemp, renderSearch };
