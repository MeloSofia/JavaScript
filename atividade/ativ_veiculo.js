class Veiculo {
    marca;
    modelo;
    ano;
    exibirDetalhes() {
        return `\n-------------------------------- \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAno: ${this.ano} \n--------------------------------`
    
    }
}

let carro = new Veiculo();
carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.ano = 2022;

let motocicleta = new Veiculo()
motocicleta.marca = "Honda";
motocicleta.modelo = "CBR 600RR";
motocicleta.ano = 2021;

console.log(carro.exibirDetalhes());
console.log(motocicleta.exibirDetalhes());