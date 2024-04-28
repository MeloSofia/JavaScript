import rl from "readline-sync";

function validarLength() {
	let cpf;
	do {
		cpf = rl.question("Digite seu CPF (11 digitos): ");
		cpf = cpf.replace(/\./g, "");
		cpf = cpf.replace(/[.-]/g, "");
	} while (cpf.length !== 11);
	return cpf;
}

function formatarCPF(cpf) {
	return (
		cpf.slice(0, 3) +
		"." +
		cpf.slice(3, 6) +
		"." +
		cpf.slice(6, 9) +
		"-" +
		cpf.slice(9)
	);
}

function validarPD(cpf) {
	const mult =
		parseInt(cpf[0]) * 10 +
		parseInt(cpf[1]) * 9 +
		parseInt(cpf[2]) * 8 +
		parseInt(cpf[3]) * 7 +
		parseInt(cpf[4]) * 6 +
		parseInt(cpf[5]) * 5 +
		parseInt(cpf[6]) * 4 +
		parseInt(cpf[7]) * 3 +
		parseInt(cpf[8]) * 2;
	let seg = (mult * 10) % 11;
	return seg;
}

function validarSD(cpf) {
	const mult =
		parseInt(cpf[0]) * 11 +
		parseInt(cpf[1]) * 10 +
		parseInt(cpf[2]) * 9 +
		parseInt(cpf[3]) * 8 +
		parseInt(cpf[4]) * 7 +
		parseInt(cpf[5]) * 6 +
		parseInt(cpf[6]) * 5 +
		parseInt(cpf[7]) * 4 +
		parseInt(cpf[8]) * 3 +
		parseInt(cpf[9]) * 2;
	let seg2 = (mult * 10) % 11;
	return seg2;
}

function validarCPF(cpf) {
	let result2 = validarPD(cpf);
	let result3 = validarSD(cpf);

	if (result2 === 10 || result3 === 10) {
		console.log("CPF inválido!");
		return false;
	} else {
		console.log("CPF válido!");
		return true;
	}
}
let cpf = validarLength();
console.log(`Seu CPF é:`, formatarCPF(cpf));

if (validarCPF(cpf)) {
	console.log("Passou pela primeira verificação!");
	console.log("Passou pela segunda verificação!");
}
