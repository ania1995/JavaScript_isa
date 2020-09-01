// var num1 = 5;
// var num2 = 10;
// var sum = num1 + num2;

// console.log(sum);

const allparagraph = document.querySelectorAll("p");
console.log(allparagraph);

const elementbyClass = document.querySelector(".firstParagraph");
console.log(elementbyClass);

const elementbyId = document.getElementById("firstBlock");
console.log(elementbyId);

//method with loop for
for (let i = 0; i < allparagraph.length; i++) {
  console.log(`paragraph number ${i + 1}`, allparagraph[i]);
}

//method with loop forEach - more more suitable version
allparagraph.forEach(function (currentValue, currentIndex) {
  console.log(`paragraph number ${currentIndex + 1}`, currentValue);
});
