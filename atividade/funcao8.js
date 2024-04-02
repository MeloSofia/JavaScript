import valor, { question } from "readline-sync";
let altura = valor.questionFloat("Digite sua altura: ");
let peso = valor.questionFloat("Digite seu peso: ");
function calculo(altura, peso) {
	let imc = peso / (altura * altura);
	return imc.toFixed(2);
}
console.log("Seu I.M.C será de: ", calculo(altura, peso));
