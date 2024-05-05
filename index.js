const btnInc = document.getElementById("increse");
const btnDec = document.getElementById("decrese");
let count = 0;

const counter = document.getElementById("count");

const updateCounter = () => {
  counter.innerHTML = count;
};

btnInc.addEventListener("click", () => {
  count += 1;
  updateCounter();
});

btnDec.addEventListener("click", () => {
  if (count === 0) {
    alert("Value is always positive");
  } else {
    count -= 1;
    updateCounter();
  }
});






















