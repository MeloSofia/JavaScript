import readline from "readline-sync";

function ret() {
	do {
		let infoR = readline.questionFloat("Digite a base: ");
		let infoR1 = readline.questionFloat("Digite a altura: ");
		let area = infoR * infoR1;
		console.log(`Area do Retangulo: ${area}`);
		let des;
		do {
			des = readline.question("Deseja realizar outra operacao? (Sim/Nao) \n");
			if (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao") {
				console.log("Opcao invalida. Por favor, digite 'Sim' ou 'Nao'.");
			}
		} while (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao");
		if (des.toLowerCase() !== "sim") {
			break;
		}
	} while (true);
}

function cir() {
	do {
		let infoC = readline.questionFloat("Digite o raio do circulo: ");
		let pi = 3.1415;
		let area = infoC * infoC * pi;
		console.log(`Area do Circulo: ${area.toFixed(2)}`);
		let des;
		do {
			des = readline.question("Deseja realizar outra operacao? (Sim/Nao) \n");
			if (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao") {
				console.log("Opcao invalida. Por favor, digite 'Sim' ou 'Nao'.");
			}
		} while (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao");
		if (des.toLowerCase() !== "sim") {
			break;
		}
	} while (true);
}

function trian() {
	do {
		let infoT = readline.questionFloat("Digite a base do triangulo: ");
		let infoT1 = readline.questionFloat("Digite a altura do triangulo: ");
		let area = (infoT * infoT1) / 2;
		console.log(`Area do Triangulo: ${area}`);
		let des;
		do {
			des = readline.question("Deseja realizar outra operacao? (Sim/Nao) \n");
			if (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao") {
				console.log("Opcao invalida. Por favor, digite 'Sim' ou 'Nao'.");
			}
		} while (des.toLowerCase() !== "sim" && des.toLowerCase() !== "nao");
		if (des.toLowerCase() !== "sim") {
			break;
		}
	} while (true);
}

while (true) {
	let menu = readline.questionInt(
		"1-Retangulo \n2-Circulo \n3-Triangulo \n4-Sair \nEscolha uma opcao: "
	);
	switch (menu) {
		case 1:
			ret();
			break;
		case 2:
			cir();
			break;
		case 3:
			trian();
			break;
		case 4:
			console.log("Saindo...");
			process.exit(0);
		default:
			console.log("Opcao invalida. Tente novamente.");
	}
}
