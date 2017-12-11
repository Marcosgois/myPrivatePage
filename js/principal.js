var DOM = document.querySelector(".titulo");
DOM.textContent = "José Marcos Vinícius Andrade Gois";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  var weigth = paciente.querySelector(".info-peso").textContent;
  var height = paciente.querySelector(".info-altura").textContent;
  paciente.querySelector(".info-imc").textContent = calculaImc(weigth, height);
  
}

function calculaImc(peso, altura){
  return (peso/(altura*altura)).toFixed(2);
}

