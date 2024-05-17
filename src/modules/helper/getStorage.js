function getStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

export default getStorage;
