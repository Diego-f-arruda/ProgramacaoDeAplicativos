import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

export default class ContaCorrente extends ContaBancaria{
    private limite: number;
    
    constructor(titular: Titular, chavePix: string){
        super(titular, chavePix);
        this.limite = 1000;
    }

    
    public getLimite() : number {
        return this.limite;
    }
    
    public override sacar(valor: number): void {
        var valorDisponivel = this.getSaldo() + this.limite;

        if(valor <= 0 || valor > valorDisponivel){
            console.log("Valor acima do limite disponivel em conta")
            return;
        }

        if(valor > this.getSaldo()){
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0);
            console.log(`Saque de ${valor} realizado com sucesso!!!`);
            console.log(`Seu saldo é ${this.getSaldo()}!!!`);
            console.log(`Seu limite é de ${this.limite}!!!`);
            return;
        }

        var saldo = this.getSaldo();
        this.setSaldo(saldo - valor);
    }
}