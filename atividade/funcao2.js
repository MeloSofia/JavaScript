import numero from "readline-sync";
let perg = numero.questionInt("Digite um numero: ");
function square(perg) {
	if (perg % 2 == 0) return "Par";
	else return "Ímpar";
}
console.log(square(perg));
