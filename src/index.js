import { getWeatherData, success, error } from "./modules/apiFunc";
import swal from "sweetalert";
import { searchParser } from "./modules/search";

const button = document.querySelector("button");
const text = document.querySelector("input");

document.body.addEventListener(
	"onLoad",
	swal(
		"How to Use",
		"Click the temperature to change from fahrenheit to celsius and vice versa. To search a new location click the magnifying glass."
	)
);

navigator.geolocation.getCurrentPosition(success, error);

button.addEventListener("click", searchParser.bind(this, text));
text.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		searchParser(text);
	}
});

export { text };
