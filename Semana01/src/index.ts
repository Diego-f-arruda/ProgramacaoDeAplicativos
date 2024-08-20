import leia from "readline-sync"

var nomes: string[] = [];
var idades: number[] = [];
var nomeNova: string;
var idadeNova: number;
var nomeVelha: string;
var idadeVelha: number;

function pedirInfoUsuario(qtd: number){
    for (var i = 0; i < qtd; i++) {
        var nome = leia.question(`Informe o Nome: `);
        nomes.push(nome);
        var idade = leia.questionInt(`Informe a idade: `);
        idades.push(idade);
    }
}

function pessoaMaisNova(){
    for(var i = 0; i < idades.length; i++){
        if(idadeNova === undefined || idades[i] < idadeNova){
            idadeNova = idades[i];
            nomeNova = nomes[i];
        }
    }
    console.log(`A pessoa mais nova se chama ${nomeNova} com ${idadeNova}`)
}



function pessoaMaisVelha(){
    idades.forEach((idade, index)=>{
        if(!idadeVelha || idade > idadeVelha){
            idadeVelha = idade;
            nomeVelha = nomes[index];
        }
    })
    console.log(`A pessoa mais velha se chama ${nomeVelha} com ${idadeVelha}`)
}
/*function pessoaMaisVelha(){
    for(var i = 0; i < idades.length; i++){
        if(idadeVelha === undefined || idades[i] > idadeVelha){
            idadeVelha = idades[i];
            nomeVelha = nomes[i];
        }
    }
}*/

pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisVelha();

