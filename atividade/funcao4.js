import rl from 'readline-sync';

// Declaração de função
function Valor(valor, porcentagem){
    return valor + porcentagem;
}

let valor = parseInt(rl.question('Digite o valor: '));
let porcentagem  = parseInt(rl.question('Digite o numero da porcentagem: '));
console.log(`${Valor(valor, porcentagem)}`);

// Expressão de função

const valorp = function(valor, porcentagem){return Valor(valor, porcentagem)};
console.log(`${valorp(valor, porcentagem)}`);

// Função de seta

const valorp1 = (valor, porcentagem) => Valor(valor, porcentagem);
console.log(`${valorp1(valor, porcentagem)}`);