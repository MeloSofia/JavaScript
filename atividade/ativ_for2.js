console.log ("\nAtividade 1")

const pessoa = {
    nome: "Sofia",
    Idade: 16,
    cidade: "Vilhena"   
};
for (let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
};
console.log ("\nAtividade 2")

const cores = ["Azul", "Amarelo", "Branco", "Rosa", "Vermelho"]
for (let cor of cores){
    console.log(cor)
};
console.log ("\nAtividade 3")

const string = "Sofia"
for (let caractere of string){
    console.log(caractere);
}