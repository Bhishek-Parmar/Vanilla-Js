const value = document.getElementById("value");
let count = 0;
function decrease() {
  count--;
  value.textContent = count;
  color();
}
function reset() {
  count = 0;
  value.textContent = count;
  color();
}

function increase() {
  count++;
  value.textContent = count;
  color();
}

function color() {
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "black";
  }
}
