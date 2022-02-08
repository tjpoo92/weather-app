import { temperatureArray } from "./apiFunc";

// T(°F) = 300K × 9/5 - 459.67 = 80.33 °F
function convToF(kelvin) {
	const faherenheitArray = kelvin.map((num) => {
		return (num * 5) / 9 - 459.67;
	});
	return faherenheitArray;
}

// T(°C) = 300K - 273.15 = 26.85 °C
function convToC(kelvin) {
	const celciusArray = kelvin.map((num) => {
		return num - 273.15;
	});
	return celciusArray;
}

export { faherenheitArray, celciusArray, convToC, convToF };
