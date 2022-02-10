import { getWeatherData } from "./apiFunc";

function searchParser(userText) {
	console.log(userText);
	const text = userText.value.replace(/\s/g, "");

	return getWeatherData(text);
}

// Parser can and should be expanded to meet most use cases or use the geocoding API from OpenWeatherMap

export { searchParser };
