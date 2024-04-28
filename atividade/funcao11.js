function investimento(capital, taxa, tempo) {
	let i = taxa / 100;
	let inv = capital * math.pow(1 + i, tempo);
	return inv.toFixed(2);
}
let capital = parseFloat(prompt("Digite o capital inicial investido:"));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

let resultado = investimento(capital, taxa, tempo);
console.log("O montante do investimento é: R$", resultado);
