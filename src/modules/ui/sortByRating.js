import clearResults from "./clearResults";

function sortByRating() {
	const results = document.querySelector("#results");
	const movies = results.children;
	const moviesArray = Array.from(movies);

	moviesArray.sort((a, b) => {
		let valueA =
			a.children[1].children[1].children[0].children[0].innerText;
		let valueB =
			b.children[1].children[1].children[0].children[0].innerText;

		if (valueA == "N/A") valueA = 0;
		if (valueB == "N/A") valueB = 0;

		const ratingA = parseFloat(valueA);
		const ratingB = parseFloat(valueB);

		return ratingB - ratingA;
	});

	clearResults();

	// append sorted results
	moviesArray.forEach((movie) => results.appendChild(movie));
}

export default sortByRating;
