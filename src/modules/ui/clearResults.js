function clearResults() {
	const results = document.querySelector("#results");
	const searchBox = document.querySelector("#searchInput");
	// clear search box
	searchBox.value = "";
	// clear previous results
	results.innerHTML = "";
}

export default clearResults;
