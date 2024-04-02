import calc from "readline-sync";
let area = calc.questionInt("Digite o raio do circulo: ");
function circulo(area) {
	let circ = (area * area) * 3.14;
  return circ
}
console.log('A área do círculo é de: ', circulo(area))