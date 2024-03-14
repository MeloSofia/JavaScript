
class Imovel {
    quarto;
    tipo;
    endereco;
    exibirInformacoes() {
        return `Quartos: ${this.quarto} \ntipo: ${this.tipo} \nendereço: ${this.endereco} \n--------------------------------`
    
    }
}

let casa = new Imovel();
casa.quarto = 4;
casa.tipo = "Casa";
casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";

let apartamento = new Imovel()
apartamento.quarto = 2,
apartamento.tipo = "Apartamento",
apartamento.endereco = "Avenida da Paz, 123 - Centro";

console.log(casa.exibirInformacoes());
console.log(apartamento.exibirInformacoes());

