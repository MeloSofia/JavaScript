//import entradaDados from "readline-sync";
//let num = entradaDados.questionInt("Digite um numero: ")
//while (num > 0){
    //console.log(`Tabuada do ${num} \n${num*1} \n${num*2} \n${num*3} \n${num*4} \n${num*5} \n${num*6} \n${num*7} \n${num*8} \n${num*9} \n${num*10}`);
    //break
//}


let numAlunos = 4;
let aluno1 = [6, 8, 7, 9]
let aluno2 = [9, 9, 8, 10]
let aluno3 = [7, 6, 8, 9]
let aluno4 = [5, 8, 7, 7]
let calAluno1 = (aluno1[0] + aluno1[1] + aluno1[2] + aluno1[3]) / 4;
let calAluno2 = (aluno2[0] + aluno2[1] + aluno2[2] + aluno2[3]) / 4;
let calAluno3 = (aluno3[0] + aluno3[1] + aluno3[2] + aluno3[3]) / 4;
let calAluno4 = (aluno4[0] + aluno4[1] + aluno4[2] + aluno4[3]) / 4;
let calTurma = (aluno1 + aluno2 + aluno3 + aluno4) / 4;
console.log(`Alunos na turma: ${numAlunos} \nMédia 1° aluno: ${calAluno1}`);
console.log(`Alunos na turma: ${numAlunos} \nMédia 2° aluno: ${calAluno2}`);
console.log(`Alunos na turma: ${numAlunos} \nMédia 3° aluno: ${calAluno3}`);
console.log(`Alunos na turma: ${numAlunos} \nMédia 4° aluno: ${calAluno4}`);