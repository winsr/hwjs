// Selecting elements
var input = document.getElementById("input");
var result = document.getElementById("result");
var inputTemp = document.getElementById("inputTemp");
var resultTemp = document.getElementById("resultTemp");
var inputTempValue;
var resultTempValue;

// Listener
input.addEventListener("keyup", myResult);
inputTemp.addEventListener("change", myResult);
resultTemp.addEventListener("change", myResult);

// Converting formula
function myResult() {
  inputTempValue = inputTemp.value;
  resultTempValue = resultTemp.value;

  if (inputTempValue === "celsius" && resultTempValue === "celsius") {
    result.value = input.value;
  } else if (inputTempValue === "celsius" && resultTempValue === "fahrenheit") {
    result.value = input.value * 1.8 + 32;
  } else if (inputTempValue === "celsius" && resultTempValue === "reamur") {
    result.value = input.value * 0.8;
  } else if (inputTempValue === "fahrenheit" && resultTempValue === "fahrenheit") {
    result.value = input.value;
  } else if (inputTempValue === "fahrenheit" && resultTempValue === "celsius") {
    result.value = (input.value - 32) * 0.555555556;
  } else if (inputTempValue === "fahrenheit" && resultTempValue === "reamur") {
    result.value = (input.value - 32) * 0.444444444;
  } else if (inputTempValue === "reamur" && resultTempValue === "reamur") {
    result.value = input.value;
  } else if (inputTempValue === "reamur" && resultTempValue === "celsius") {
    result.value = input.value * 1.25;
  } else if (inputTempValue === "reamur" && resultTempValue === "fahrenheit") {
    result.value = input.value * 2.25 + 32;
  }
}
