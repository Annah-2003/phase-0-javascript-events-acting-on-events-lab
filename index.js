// Your code here
const DODGER = document.getElementById('dodger');
//moving the "DODGER"
function moveDodgerLeft() {
  const leftEdge = 0;
  const currentPosition = parseInt(DODGER.style.left, 10);

  if (currentPosition > leftEdge) {
    DODGER.style.left = `${currentPosition - 4}px`;
  }
}
//moving the "DODGER"
function moveDodgerRight() {
  const rightEdge = 360; 
  const currentPosition = parseInt(DODGER.style.left, 10);

  if (currentPosition < rightEdge) {
    DODGER.style.left = `${currentPosition + 4}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
