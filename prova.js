// Mariana Zorzi e Sofia Melo
import rl, { question, questionFloat, questionInt }  from "readline-sync";
let menu = questionInt("1-Retângulo \n2-Círculo \n3-Triângulo \n4-Sair \nEscolha uma opção: ")
function ret(menu){
    do{
        let infoR  = questionFloat("Digite a base: ");
        let infoR1  = questionFloat("Digite a altura: ");
        let area = infoR * infoR1 ;
        console.log(area);
        let des = question("Deseja realizar outra operação? \n")
        switch(des){
            case "Sim":
                let menu = questionInt("1-Retângulo \n2-Círculo \n3-Triângulo \n4-Sair \nEscolha uma opção: ")
                console.log(menu)
            case "Não":
                break
        }
    }while(menu ==="1");
}
function cir(menu){
    do{
        let infoC  = questionFloat("Digite o raio do círculo: ");
        let pi = 3.1415
        let area = (infoC * infoC) * pi;
        console.log(area.toFixed(2));
        let des = question("Deseja realizar outra operação? \n")
        switch(des){
            case "Sim":
                menu = questionInt("1-Retângulo \n2-Círculo \n3-Triângulo \n4-Sair \nEscolha uma opção: ")
                console.log(menu)
            case "Não":
                break
        }
    }while(menu ==="2");
}

function trian(menu){
    do{
        let infoT  = questionFloat("Digite a base do triângulo: ");
        let infoT1  = questionFloat("Digite a altura do triângulo: ");
        let area = (infoT * infoT1) /2;
        console.log(area);
        let des = question("Deseja realizar outra operação? \n")
        switch(des){
            case "Sim":
                let menu = questionInt("1-Retângulo \n2-Círculo \n3-Triângulo \n4-Sair \nEscolha uma opção: ")
                console.log(menu)
            case "Não":
                break
        }
    }while(menu ==="3");
}

console.log(ret(menu))
console.log(cir(menu))
console.log(trian(menu))
