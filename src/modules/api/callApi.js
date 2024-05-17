async function callApi(param) {
	const apiKey = import.meta.env.VITE_API_KEY;
	const url = `https://www.omdbapi.com/?apikey=${apiKey}&plot=full&type=movie&${param}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

export default callApi;
