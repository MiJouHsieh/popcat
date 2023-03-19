const popcat = document.querySelector(".popcat");
const clickTimes = document.querySelector(".clickTimes");

popcat.addEventListener("mousedown", openMouth);
popcat.addEventListener("mouseup", closeMouth);
function openMouth(event) {
  clickTimes.textContent = Number(clickTimes.textContent) + 1;
  popcat.src = "https://popcat.click/img/op.353767c3.png";
  playAudio();
}
function closeMouth(event) {
  popcat.src = "https://popcat.click/img/p.1e9d00be.png";
}

function playAudio() {
  document.querySelector("#audio").play();
}