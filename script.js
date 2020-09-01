const parent = document.querySelector("body");
parent.innerText = "";

for (let i = 0; i < 20; i++) {
  const newElement = document.createElement("div");
  newElement.textContent = `Element ${i + 1}`;
  newElement.classList = `css-class-${i + 1}`;
  console.log(newElement);
  parent.appendChild(newElement);
}
