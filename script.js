var input = document.getElementById("display");
function appendToDisplay(val) {
  input.value = input.value + val;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "error";
  }
}
function clearDisplay() {
  input.value = "";
}
