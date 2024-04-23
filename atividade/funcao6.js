import rl from 'readline-sync';

// Declaração de função
function Circulo(area){
    return  (area * area) * 3.14;
}

let area = parseInt(rl.question('Digite o raio do circulo: '));

console.log(`A área do circulo é igual a: ${Circulo(area)}`);

// Expressão de função

const ar = function(A){return Circulo(A)};
console.log(`A área do circulo é igual a: ${ar(area)}`);

// Função de seta

const are= (A) => Circulo(A);
console.log(`A área do circulo é igual a: ${are(area)}`);