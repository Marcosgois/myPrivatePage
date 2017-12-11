var btnBuscar = document.querySelector("#buscar-pacientes");

window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});

btnBuscar.addEventListener("click", function() {
    console.log("buscando pacientes");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});