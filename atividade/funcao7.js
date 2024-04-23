import rl from 'readline-sync';

// Declaração de função
function Celsius(celsius){
    return celsius * 1.8 + 32
}

let celsius = parseInt(rl.question('Digite a temperatura em Celsius: '))
console.log(`A temperatura convertida em Fahrenheit é: ${Celsius(celsius)}°F`)

// Expressão de função

const C = function(celsius){return Celsius(celsius)};
console.log(`A temperatura convertida em Fahrenheit é: ${C(celsius)}°F`);

// Função de seta

const CE= (celsius) => Celsius((celsius));
console.log(`A temperatura convertida em Fahrenheit é: ${CE((celsius))}°F`);
