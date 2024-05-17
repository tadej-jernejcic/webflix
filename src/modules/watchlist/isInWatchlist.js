import getStorage from "../helper/getStorage";

function isInWatchlist(imdbID) {
	// get watchlist from local storage
	let watchlist = getStorage("watchlist");

	// if watchlist doesnt exist, create it
	if (watchlist === null) {
		localStorage.setItem("watchlist", JSON.stringify([]));

		return false;
	} else {
		return watchlist.includes(imdbID);
	}
}

export default isInWatchlist;
