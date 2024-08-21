import leia from "readline-sync"
import { Celular, cadastrarCelular } from "./repository/celularRepository";
import { Pessoa } from "./repository/PessoaRepository";



/*                                */ 
var cor = leia.question("Informe a cor do celular: ");
var marca = leia.question("Informe a marca do celular: ");
var tamanhoTela = leia.questionFloat("Informe o tamanho da tela do celular: ");

let celular: Celular = {
    cor: cor,
    marca: marca,
    tamanhoTela: tamanhoTela
}

cadastrarCelular(celular);


var nome = leia.question("Digite o nome: ");
var cpf = leia.question("Digite o cpf: ");
var dtNascimento = leia.question("Digite a data de Nascimento: ");
var telefones = leia.question("Digite o Telefone: ");
var emails = leia.question("Digite o email: ");

const pessoa: Pessoa = {
    nome,
    cpf,
    dataNascimento: dtNascimento,
    contatos: {
        telefones:[telefones],
        emails:[emails]
    },
    celular: celular
}

console.log(pessoa)

pessoa.celular.marca