function cleanTerm(term) {
	return term.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default cleanTerm;
