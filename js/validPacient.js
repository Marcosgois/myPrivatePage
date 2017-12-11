function validPacient(paciente, form) {
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("Nome inválido")
        form.querySelector("#nome").classList.add("campo-invalido");
    }else{
        form.querySelector("#nome").classList.remove("campo-invalido");
    }
    if(paciente.gordura.length == 0){
        erros.push("% de gordura inválida")
        form.querySelector("#gordura").classList.add("campo-invalido");
    }else{
        form.querySelector("#gordura").classList.remove("campo-invalido");
    }
    if (paciente.peso <= 0 || paciente.peso >= 300) {
        erros.push("Peso inválido")
        form.querySelector("#peso").classList.add("campo-invalido");
    }else{
        form.querySelector("#peso").classList.remove("campo-invalido");
    }
    if (paciente.altura <= 0 || paciente.altura >= 3){
        erros.push("Altura inválida")
        form.querySelector("#altura").classList.add("campo-invalido");
    }else{
        form.querySelector("#altura").classList.remove("campo-invalido");
    }
    return erros;
  }