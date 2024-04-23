import rl from'readline-sync';

// Declaração de função
function caixaAlta(string){
    return string.toUpperCase();
}
let nome = rl.question('Informe seu nome: ');
console.log(`${caixaAlta(nome)}`);

// Expressão de função
const upperCase = function(string){return string.toUpperCase()};
console.log(`${upperCase(nome)}`);

//Função de seta
const maiusculas = (string) => string.toUpperCase();
console.log(`${maiusculas(nome)}`) 	
