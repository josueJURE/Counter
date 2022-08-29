const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let value = document.querySelector(".value");
let number = 0;

console.log(increase, decrease, reset);

increase.addEventListener("click", plus);
decrease.addEventListener("click", minus);
reset.addEventListener("click", resetCounter);


function color() {
  if(number < 0) {
    value.style.color = "red";
  } else if (number === 0){
    value.style.color = "black";
  } else {
    value.style.color = "green";
  }
}

function plus() {
  value.innerHTML = number++;
  color();
}

function minus() {
  value.innerHTML = number--;
  color();
}

function resetCounter() {
  number = 0;
  value.innerHTML = number;
  color();
}
