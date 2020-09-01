console.dir();

const newOneElement = document.createElement("div");
newOneElement.id = "preFirstBlock";
newOneElement.innerText = "Wstawiony PreFirst DIV";

console.log(newOneElement);

const previouslyElement = document.querySelector("#firstBlock");
const parent = document.querySelector("body");

parent.insertBefore(newOneElement, previouslyElement);
