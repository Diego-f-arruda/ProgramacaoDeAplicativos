import Titular from "./Titular";

export default class ContaBancaria {
    constructor(nome: Titular, chavePix: string) {
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
        this.saldo = 1000;
        this.titular = nome;
        this.chavePix = chavePix;
        this.dataCriacao = new Date();
    }

    private numero: string;
    private saldo: number;
    private titular: Titular;
    private chavePix: string;
    private dataCriacao: Date;

    public getNumero(): string{
        return this.numero;
    }

    public setNumero(numero: string): void{
        this.numero = numero;
    }
    public getSaldo(): number{
        return this.saldo;
    }

    public setSaldo(saldo: number): void{
        this.saldo = saldo;
    }

    public getTitular(): Titular{
        return this.titular;
    }

    public setTitular(titular: Titular): void{
        this.titular = titular;
    }

    
    public getChavePix() : string {
        return this.chavePix;
    }

    
    public getDataCriacao() : Date {
        return this.dataCriacao;
    }
    
    

    mostrarDadosConta() {
console.log(`------- DADOS DA CONTA -------`)
        console.log(`Nome do Titular: ${this.titular.getNome()}`)
        console.log(`CPF do Titular: ${this.titular.getCpf()}`)
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