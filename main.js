import clearResults from "./src/modules/ui/clearResults";
import searchMovie from "./src/modules/ui/searchMovie";
import showWatchlist from "./src/modules/watchlist/showWatchlist";

// search bar
document.querySelector("#searchInput").addEventListener("keypress", (event) => {
	if (event.keycode === 13 || event.which === 13) searchMovie();
});

// search button
document.querySelector("#searchButton").addEventListener("click", searchMovie);

// logo
document.querySelector(".logo").addEventListener("click", clearResults);

// watchlist
document.querySelector(".watchlist").addEventListener("click", showWatchlist);
