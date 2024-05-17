import newElement from "./newElement";
import addToWatchlist from "../watchlist/addToWatchlist";
import removeFromWatchlist from "../watchlist/removeFromWatchlist";
import isInWatchlist from "../watchlist/isInWatchlist";

// displaying data
function displayData(data) {
	const results = document.querySelector("#results");
	const imdbUrl = `https://www.imdb.com/title/${data.imdbID}`;

	// movie
	const movie = document.createElement("section");
	movie.classList.add("movie");
	movie.setAttribute("id", data.imdbID);

	// info
	const infoDiv = document.createElement("div");
	infoDiv.classList.add("info");

	// poster
	const poster = document.createElement("img");
	poster.src = data.Poster;
	poster.alt = data.Title;
	poster.classList.add("poster");
	movie.appendChild(poster);

	// title
	newElement(
		"title",
		`<a href="${imdbUrl}">${data.Title}</a>`,
		"h2",
		infoDiv
	);

	// extra details
	const extraDiv = document.createElement("div");
	extraDiv.classList.add("extra");

	// rating
	const rating = document.createElement("h3");
	rating.innerHTML = `⭐ <span>${data.imdbRating}</span> / 10`;
	rating.classList.add("rating");
	extraDiv.appendChild(rating);

	// runtime
	newElement("runtime", data.Runtime, "h3", extraDiv);
	// year
	newElement("year", data.Released, "h3", extraDiv);

	// append extra details
	infoDiv.appendChild(extraDiv);

	// people
	const peopleDiv = document.createElement("div");
	peopleDiv.classList.add("people");

	// genre
	newElement("genre", data.Genre, "h3", peopleDiv);
	// director
	newElement("director", `Director: ${data.Director}`, "p", peopleDiv);
	// actors
	newElement("actors", `Actors: ${data.Actors}`, "p", peopleDiv);

	// append people
	infoDiv.appendChild(peopleDiv);

	// description
	newElement("description", data.Plot, "p", infoDiv);

	// watch button
	const imdbButton = document.createElement("a");
	imdbButton.innerHTML = `<i class="fa-solid fa-video"></i> GO TO IMDb`;
	imdbButton.href = imdbUrl;
	imdbButton.classList.add("imdbButton");
	infoDiv.appendChild(imdbButton);

	// favorite button
	const favoriteButton = document.createElement("a");
	favoriteButton.innerHTML = `<i class="fa-solid fa-plus"></i> ADD TO WATCHLIST`;
	favoriteButton.onclick = addToWatchlist;
	favoriteButton.classList.add("favoriteButton");

	// unfavorite button
	const unfavoriteButton = document.createElement("a");
	unfavoriteButton.innerHTML = `<i class="fa-solid fa-x"></i> REMOVE FROM WATCHLIST`;
	unfavoriteButton.onclick = removeFromWatchlist;
	unfavoriteButton.classList.add("unfavoriteButton");

	isInWatchlist(data.imdbID)
		? infoDiv.appendChild(unfavoriteButton)
		: infoDiv.appendChild(favoriteButton);

	// append
	movie.appendChild(infoDiv);

	results.appendChild(movie, results.firstChild);
}

export default displayData;
