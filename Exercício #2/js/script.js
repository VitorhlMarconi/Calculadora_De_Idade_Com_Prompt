//Exercício #2: Calculo de idade!

    anoNascimento = prompt("Por favor informe a data do seu nascimento");
    var date = new Date();

      while(anoNascimento >= date.getFullYear()){

        alert("Por favor, informe seu ano de nascimento corretamente.");
        anoNascimento = prompt("Por favor informe a data do seu nascimento...");
     }

    anoAtual = prompt("Por favor informe a data atual...");

     while(anoAtual <= anoNascimento){

        alert("Por favor, informe seu ano atual corretamente.");
        anoAtual = prompt("Por favor informe a data atual...");
     }

    var idadeFinal = anoAtual - anoNascimento;

    alert("A idade final é: " + idadeFinal);