import entraDados from "readline-sync";
let nome= entraDados.question("Digite seu nome: ");
console.log(`Olá, ${nome}.`);

let x = entraDados.questionInt("X: ");
let y = entraDados.questionInt("Y: ");
console.log(`Total: ${x*y}`);

let idade = 15;
if (idade >= 18){
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}
if (idade >= 16) console.log("Pode voltar");
