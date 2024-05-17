import callApi from "./callApi";

// call API for multiple results
async function callApiMultiple(term) {
	const param = `s=${term}`;

	return callApi(param);
}

export default callApiMultiple;
