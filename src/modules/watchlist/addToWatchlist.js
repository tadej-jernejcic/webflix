import saveToStorage from "../helper/saveToStorage";

function addToWatchlist() {
	// css checkmark toggle
	this.children[0].classList.toggle("fa-plus");
	this.children[0].classList.toggle("fa-check");

	const movieID = this.parentElement.parentElement.id;

	saveToStorage("watchlist", movieID);
}

export default addToWatchlist;
