const button = document.getElementById("btnCambiarColor");
let isColor = true;

button.addEventListener("click", () => {
  document.body.style.background = isColor ? "#FF5733" : "#33FF57";
  isColor = !isColor;
});
