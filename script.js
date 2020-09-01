const div = document.querySelector("#firstBlock");
div.innerHTML = "";

//write all properties of element newClass
console.dir(div);

//Method 1.
for (let i = 0; i < 3; i++) {
  const newElement = document.createElement("p");
  newElement.innerText = `new paragraph ${i + 1}`;
  div.appendChild(newElement);
}

//Method 2.
const newArray = [];
for (let i = 0; i < 3; i++) {
  newArray[i] = document.createElement("p");
  newArray[i].innerText = `new paragraph ${i + 1}`;
  div.appendChild(newArray[i]);
}
