// Button that changes the image
const button = document.getElementById("clickBtn");

// This dispays the image
const image = document.querySelector("#yourAgeAtTheTime img");

// Image container for mouseover event
const imageContainer = document.getElementById("yourAgeAtTheTime");

// List of images and ages
const pictures = [
  { src: "images/Baby_MP.jpeg", age: "1", year: "1976" },
  { src: "images/Toddler_MP.jpeg", age: "4", year: "1979" },
  { src: "images/Kiddo_MP.jpeg", age: "9", year: "1984" },
  { src: "images/Preteen_MP.jpeg", age: "12", year: "1987" },
  { src: "images/Highschool_MP.jpeg", age: "18", year: "1993" }
];

// Track which picture is currently displayed
let currentIndex = 0;

// Shows a message when the picture changes
function customFunction() {
console.log("Changed the picture");
}

// When the button is clicked, move to the next picture
button.addEventListener("click", function () {
currentIndex++;

// If we reach the end, start over
if (currentIndex >= pictures.length) {
currentIndex = 0;
}

image.src = pictures[currentIndex].src;
customFunction();
});

// When hovering over the image, show the age at that time and what year it was
imageContainer.addEventListener("mouseover", function () {
  alert(
    "This picture was taken in " +
    pictures[currentIndex].year +
    " and I was " +
    pictures[currentIndex].age +
    " years old."
  );
});