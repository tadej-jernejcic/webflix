// encoding url
function encodeURL(string) {
	return string
		.replace(/[^\w\s.-]/g, function (match) {
			return encodeURIComponent(match);
		})
		.replace(/\s+/g, "+");
}

export default encodeURL;
