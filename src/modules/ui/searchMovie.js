import clearResults from "./clearResults";
import callApiById from "../api/callApiById";
import callApiByTerm from "../api/callApiByTerm";
import callApiMultiple from "../api/callApiMultiple";
import sortByRating from "./sortByRating";
import encodeURL from "../helper/encodeURL";
import displayData from "./displayData";
import newElement from "./newElement";
import isTermInHistory from "../helper/isTermInHistory";
import getStorage from "../helper/getStorage";
import cleanTerm from "../helper/cleanTerm";
import isIdInHistory from "../helper/isIdInHistory";

function searchMovie() {
	const results = document.querySelector("#results");
	const searchBox = document.querySelector("#searchInput");
	const exactCheckbox = document.querySelector("#exactSearch");
	const isExact = exactCheckbox.checked;
	const term = encodeURL(searchBox.value);

	clearResults();

	if (isExact) {
		// exact search (single result)
		if (isTermInHistory(cleanTerm(term))) {
			// avoid unecessary api calls if item in history
			const history = getStorage("history");

			const movie = history.find(
				(x) => cleanTerm(x.Title) === cleanTerm(term)
			);

			displayData(movie);
		} else {
			// else, call api
			callApiByTerm(term).then((data) => {
				displayData(data);
			});
		}
	} else {
		// multiple search (many results)
		callApiMultiple(term).then((data) => {
			if (data.Response === "True") {
				// map over results
				data.Search.map((el) => {
					// call api if the movie isnt in history
					if (!isIdInHistory(el.imdbID)) {
						console.log(el.Title, "from API");
						callApiById(el.imdbID)
							.then((data) => {
								displayData(data);
							})
							.then(() => sortByRating());
					} else {
						// else, display movie from history
						console.log(el.Title, "in history");
						const history = getStorage("history");
						const movie = history.find(
							(x) => x.imdbID === el.imdbID
						);
						displayData(movie);
					}
				});
			} else {
				// display error message
				newElement(
					"error",
					`${data.Error} Please try exact search.`,
					"p",
					results
				);
			}
		});
	}
}

export default searchMovie;
