const loadText = document.querySelector(".loading-text");
const container = document.querySelector(".container");

let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    loadText.classList.add("hidden");
    container.classList.remove("hide-body");
  }

  loadText.innerText = `Loading ${load}`;
}
