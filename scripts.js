let number = 0;

function counter(value) {
  number += value;
  console.log(number)
  document.getElementById("count").innerHTML = number;
}