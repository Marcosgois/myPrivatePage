var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = getPacientForm(form);
    var pacienteTr = newTr(paciente);
    var erros = validPacient(paciente, form);

    if (erros.length > 0) {
        invalidInputs(erros);
    }else{
        adicionaPacienteNaTabela(paciente);
        form.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
    }

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = newTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function getPacientForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function newTr(paciente){
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(newTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(newTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(newTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(newTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(newTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function newTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function invalidInputs(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.classList.add("mensagem-erro");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
