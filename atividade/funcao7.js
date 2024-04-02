import valor from "readline-sync";
let celsius = valor.questionFloat("Digite a temperatura em graus Celsius: ");
function temp(celsius) {
	let fahr = celsius * 1.8 + 32;
	return fahr;
}
console.log("Temperatura em graus Celsius: ",celsius)
console.log("A temperatura em Fahrenheit é de: ", temp(celsius));
