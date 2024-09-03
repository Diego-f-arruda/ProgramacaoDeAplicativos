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
            console.log("Saldo insuficiente para saque;")
            return;
        }

        if(valor > this.getSaldo()){
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0)
        }

    }


}