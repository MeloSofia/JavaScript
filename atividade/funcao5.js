import rl from 'readline-sync';

// Declaração de função
function ValorDesconto(valor, percentual){
    return valor * percentual / 100 ;
}

let valor = parseInt(rl.question('Digite o valor do produto: '));
let percentual = parseInt(rl.question('Digite o percentual de desconto: '));
console.log(`O valor final será: R$${ValorDesconto(valor, percentual)},00`);

// Expressão de função

const vd = function(valor, percentual){return ValorDesconto(valor, percentual)};
console.log(`${vd(valor, percentual)}`);

// Função de seta

const VD = (valor, percentual) => ValorDesconto(valor, percentual);
console.log(`${VD(valor, percentual)}`);