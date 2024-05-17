import getStorage from "../helper/getStorage";

function removeFromWatchlist() {
	if (typeof Storage !== "undefined") {
		const movieID = this.parentElement.parentElement.id;

		// get watchlist from local storage
		let watchlist = getStorage("watchlist");

		// remove
		const index = watchlist.indexOf(movieID);

		if (index > -1) watchlist.splice(index, 1);

		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	} else {
		alert("Browser does not support local storage.");
	}

	this.parentElement.parentElement.remove();
}

export default removeFromWatchlist;
