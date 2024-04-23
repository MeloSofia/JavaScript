import rl from 'readline-sync';

// Declaração de função
function IMC(altura, peso){
    return peso / (altura * altura);
}

let altura = parseFloat(rl.question('Digite a altura: '));
let peso = parseFloat(rl.question('Digite o peso: '));
console.log(`Seu IMC é de: ${IMC(altura, peso)}`);

// Expressão de função
const Indice = function(altura, peso) { return peso / (altura * altura) };
console.log(`Seu IMC é de: ${Indice(altura, peso)}`);

// Função de seta
const Imc = (altura, peso) => peso / (altura * altura);
console.log(`Seu IMC é de: ${Imc(altura, peso)}`);
