import numeros from "readline-sync";
let perg = numeros.questionFloat("Digite o primeiro numero: ");
let perg2 = numeros.questionFloat("Digite o segundo numero: ");
function soma(perg, perg2) {
	return perg + perg2;
}
console.log(`A soma dos numeros é: `, soma(perg, perg2));
