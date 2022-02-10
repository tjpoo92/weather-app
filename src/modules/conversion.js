import { temperatureArray } from "./apiFunc";

// T(°F) = 300K × 9/5 - 459.67 = 80.33 °F
function convToF(kelvin) {
	const fahrenheitArray = kelvin.map((num) => {
		return Math.round((num * 9) / 5 - 459.67);
	});
	return fahrenheitArray;
}

// T(°C) = 300K - 273.15 = 26.85 °C
function convToC(kelvin) {
	const celsiusArray = kelvin.map((num) => {
		return Math.round(num - 273.15);
	});
	return celsiusArray;
}

export { convToC, convToF };
