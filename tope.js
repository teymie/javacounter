const counter = document.getElementById("counter");
const higherBtn = document.getElementById("higher");
const lowerBtn = document.getElementById("lower");

let counterValue = 0;
higherBtn.addEventListener("click", function (event) {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
lowerBtn.addEventListener("click", function (event) {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
