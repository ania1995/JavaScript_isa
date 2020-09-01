const newElement = document.createElement("div");
newElement.innerHTML = "Example content of new div";

const div = document.querySelector("#firstBlock");
div.appendChild(newElement);
