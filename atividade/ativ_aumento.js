import entraDados from "readline-sync"
let salario = entraDados.questionFloat("Digite seu salario atual: ");
let bonif = entraDados.question("Escolha a bonificacao: A, B, C, D: ")
switch(bonif){
    case "A":
        console.log(`Salario atual: ${5/100 * salario}`);
        break;
    case "B":
        console.log(`Salario atual: ${10/100 * salario}`);
        break;
    case "C":
        console.log(`Salario atual: ${15/100 * salario}`);
        break;
    case "D":
        console.log(`Salario atual: ${20/100 * salario}`);
        break;
}
