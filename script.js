const div = document.querySelector("#firstBlock");
div.textContent = "";

//write all properties of element newClass
console.dir(div);

for (let i = 0; i < 3; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = `new paragraph ${i + 1}`;
  div.appendChild(newElement);
}
