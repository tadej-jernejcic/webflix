import getStorage from "./getStorage";
import cleanTerm from "./cleanTerm";

function isTermInHistory(value) {
	// get watchlist from local storage
	let history = getStorage("history");

	// if watchlist doesnt exist, create it
	if (history === null) {
		localStorage.setItem("history", JSON.stringify([]));

		return false;
	} else {
		// history
		const index = history.findIndex(
			(item) => cleanTerm(item.Title) === value
		);

		return index !== -1;
	}
}

export default isTermInHistory;
