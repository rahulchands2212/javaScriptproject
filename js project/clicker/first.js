const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", (e) => {
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
const color = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "gold",
  "silver",
  "coral",
  "crimson",
  "indigo",
  "violet",
  "turquoise",
  "khaki",
  "salmon",
  "tomato",
  "plum",
  "chocolate"
];
  let index = Math.floor(Math.random() * color.length);

  circleElement.style.backgroundColor = color[index];
  circleElement.textContent = color[index];

 

  circleElement.style.top = `${e.clientY-25}px`;
  circleElement.style.left = `${e.clientX-25}px`;

  body.append(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 5000);
});
