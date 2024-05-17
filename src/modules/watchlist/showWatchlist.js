import clearResults from "../ui/clearResults";
import callApiById from "../api/callApiById";
import displayData from "../ui/displayData";
import sortByRating from "../ui/sortByRating";
import getStorage from "../helper/getStorage";
import isIdInHistory from "../helper/isIdInHistory";

function showWatchlist() {
	clearResults();

	let watchlist = getStorage("watchlist");

	if (watchlist !== null) {
		watchlist.forEach((movieID) => {
			if (isIdInHistory(movieID)) {
				const history = getStorage("history");

				const movie = history.find((x) => x.imdbID === movieID);

				displayData(movie);
			} else {
				callApiById(movieID)
					.then((data) => displayData(data))
					.then(() => sortByRating());
			}
		});
	}
}

export default showWatchlist;
