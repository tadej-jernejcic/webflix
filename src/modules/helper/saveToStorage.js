import getStorage from "./getStorage";

function saveToStorage(key, data) {
	if (typeof Storage !== "undefined") {
		// get array from local storage
		let storageArray = getStorage(key);

		if (storageArray === null) {
			// if array doesnt exist, create it
			localStorage.setItem(key, JSON.stringify([data]));
		} else {
			// check if data is already in storage
			if (key === "history" && data.Response == "True") {
				// history
				const index = storageArray.findIndex(
					(item) => item.imdbID === data.imdbID
				);

				index !== -1
					? storageArray.splice(index, -1)
					: storageArray.push(data);
			} else if (key === "watchlist") {
				// watchlist
				const index = storageArray.indexOf(data);

				index > -1
					? storageArray.splice(index, 1)
					: storageArray.push(data);
			}

			localStorage.setItem(key, JSON.stringify(storageArray));
		}
	} else {
		alert("Browser does not support local storage.");
	}
}

export default saveToStorage;
