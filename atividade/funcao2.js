import rl from 'readline-sync';

// Declaração de função
function comparacao(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = rl.question('Digite um numero: ');
console.log(`${comparacao(numero)}`);

// Expressão de função

const comparacao1 = function(numero){ return comparacao(numero)};
console.log(`${comparacao1(numero)}`);    

// Função de seta 

const num = (numero) => comparacao(numero);
console.log(`${num(numero)}`);
