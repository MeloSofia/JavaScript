import valor from "readline-sync";
let num = valor.questionFloat("Digite o valor do produto: ");
let desc = valor.questionFloat("Digite o valor do desconto: ");
function calc(num, desc) {
	let desconto = (num * desc) / 100;
	let valF = num - desconto;
	return valF;
}
console.log(`O valor final será de: `, calc(num, desc));
