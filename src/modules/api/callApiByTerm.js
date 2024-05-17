import callApi from "./callApi";
import saveToStorage from "../helper/saveToStorage";

// call API by term
async function callApiByTerm(term) {
	const param = `t=${term}`;

	const data = await callApi(param);

	saveToStorage("history", data);

	return data;
}

export default callApiByTerm;
