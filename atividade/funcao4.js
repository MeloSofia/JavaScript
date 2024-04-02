import valor from "readline-sync";
let num = valor.questionFloat("Digite um valor: ");
let porcent = valor.questionFloat("Digite a porcentagem desejada:");
function acresc(num, porcent) {
	let acrescimo = (num * porcent) / 100;
	let valF = num + acrescimo;
	return valF;
}
console.log(`O valor com acréscimo será de: `, acresc(num, porcent));
