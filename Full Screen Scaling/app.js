const dot = document.querySelector(".dot");
const teddy = document.querySelector(".teddy");

dot.addEventListener("click", (e) => handleEnlarge(e));

function handleEnlarge(e){
    const element = e.srcElement;
    if(element === teddy){
        dot.classList.toggle("enlarge")
        return;
    }
    dot.classList.add("enlarge")
}