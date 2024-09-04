import leia from "readline-sync";
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";

var nome = leia.question("Diga seu Nome: ")
var cpf = leia.question("Digite seu CPF: ")
var chavePix = leia.question("Qual a sua chave PIX: ")

var t1 = new Titular(nome, cpf);
var c1 = new ContaBancaria(t1, chavePix);

var cc = new ContaCorrente(t1, chavePix);



c1.verSaldo();
c1.depositar(150000);
c1.sacar(1400);
c1.mostrarDadosConta();