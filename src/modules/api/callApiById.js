import saveToStorage from "../helper/saveToStorage";
import callApi from "./callApi";

// call api by id
async function callApiById(id) {
	const param = `i=${id}`;

	const data = await callApi(param);

	saveToStorage("history", data);

	return data;
}

export default callApiById;
