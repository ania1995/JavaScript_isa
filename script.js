// Change content of element of id="firstBlock";
const newText = document.getElementById("firstBlock");
newText.innerHTML = "New text DIV";

//Add new class="new-class";
const newClass = document.querySelector(".secondParagraph");
newClass.classList.add("new-class");

//write all properties of element newClass
console.dir(newClass);

console.dir(newText);
