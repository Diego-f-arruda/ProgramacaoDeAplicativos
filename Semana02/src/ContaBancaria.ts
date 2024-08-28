import Titular from "./Titular";

export default class ContaBancaria {
    constructor(nome: Titular, chavePix: string) {
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
        this.saldo = 0.0;
        this.titular = nome;
        this.chavePix = chavePix;
        this.dataCriacao = new Date();
    }

    numero: string;
    saldo: number;
    titular: Titular;
    chavePix: string;
    dataCriacao: Date;

    mostrarDadosConta() {
console.log(`------- DADOS DA CONTA -------`)
        console.log(`Nome do Titular: ${this.titular.nome}`)
        console.log(`CPF do Titular: ${this.titular.cpf}`)
        console.log(`Chave PIX: ${this.chavePix}`)
        console.log(`Numero da Conta: ${this.numero}`)
        console.log(`Data da Criação: ${this.dataCriacao}`)
        console.log(`Saldo Atual: ${this.saldo.toFixed(2)}`)
    }

    depositar(valor: number) {
        if (valor <= 0) {
            console.log(`Não é um valor Válido`)
        } else {
            this.saldo = this.saldo + valor;
            console.log(`Deposito realizado com sucesso`)
            console.log(`Seu saldo atual é de R$ ${this.saldo}! `);
        }

    }

    sacar(valor: number) {
        if (valor > this.saldo || valor <= 0) {
            console.log(`Valor acima do limite disponivel em conta`)
        } else {
            this.saldo -= valor;
            console.log(`Deposito realizado com sucesso`)
            console.log(`Seu saldo atual é de R$ ${this.saldo}! `);
        }
    }

    verSaldo() {
        console.log(`Seu saldo é de R$ ${this.saldo}! `)
    }

}