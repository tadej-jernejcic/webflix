function newElement(style, innerText, element, parent) {
	const newElement = document.createElement(element);
	newElement.innerHTML = innerText;
	newElement.classList.add(style);
	parent.appendChild(newElement);
}

export default newElement;
