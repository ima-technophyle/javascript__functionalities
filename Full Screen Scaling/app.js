const dot = document.querySelector(".dot");
const teddy = document.querySelector(".teddy");
const teddyLarge = document.querySelector(".teddy-large");

dot.addEventListener("click", (e) => handleEnlarge(e));

function handleEnlarge(e) {
  const element = e.srcElement;

  if (element === teddyLarge) {
    console.log("ee");
    dot.classList.remove("enlarge");
    teddy.classList.remove("teddy-disappear");
    return;
  }

  if (element.className.includes("enlarge")) return;
  dot.classList.add("enlarge");
  teddy.classList.add("teddy-disappear");
}
