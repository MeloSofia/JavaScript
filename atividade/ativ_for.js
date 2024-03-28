let anterior = 0
let atual= 1
console.log(anterior);
console.log(atual);
for (let i = 3; i <= 20; i++){
    let proximo = anterior + atual
    console.log(proximo)

    anterior = atual
    atual = proximo 
}


import rl, {questionInt} from "readline-sync"
for (let i = 1; i <= 2; i++){
    let pessoa = rl.question(`Informe o nome: `);
    let salario = rl.questionFloat(`Informe o salario de ${pessoa}: `);
    let imposto= 0
    if (salario <= 2100){
        imposto =  0;
    }
    else if (salario <=2800){
        imposto = salario *0.075;
    }
    else if (salario <= 3750){
        imposto = salario * 0.15;
    }
    else if (salario <= 4660){
        imposto * 0.225;
    }
    else {
        imposto = salario * 0.275;
    }
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`\nNome ${pessoa} \nImposto de Renda: R$ ${imposto.toFixed(2)}\n`)
}
