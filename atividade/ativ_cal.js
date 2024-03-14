import entraDados from "readline-sync";
let operacao = entraDados.question("Digite a operacao desejada: ")
let cal1 = entraDados.questionInt("Digite o primeiro valor: ")
let cal2 = entraDados.questionInt("Digite o segundo valor: ")
switch (operacao){
    case "Adicao":
    console.log (cal1 + cal2);
    break;

    case "Muliplicacao":
    console.log (cal1 * cal2);
    break;

    case "Divisao":
    console.log (cal1 / cal2);
    break;

    case "Subtracao":
    console.log (cal1 - cal2);
    break;
}