let currentInput = "";
let currentOperator = "";
let prevInput = "";

function acrescentarNoDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function limparDisplay() {
  currentInput = "";
  document.getElementById('display').value = "";
}

function calcularResultado() {
    prevInput = currentInput;
    document.getElementById('display').value = currentInput;
}

function calcularResultado() {
  prevInput = currentInput;
  try {
      currentInput = eval(currentInput);
      document.getElementById('display').value = currentInput;
  } catch (error) {
      document.getElementById('display').value = "Erro";
      currentInput = "";
  }
}
