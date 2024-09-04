import leia from "readline-sync";
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class Banco{
    private contas: Array<ContaBancaria> = [];


    private save(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`Sua conta ${conta.getNumero()} foi criada com sucesso!`);
    }

    public addConta(){
        var nome = leia.question(`Digite seu nome: `);
        var cpf = leia.question("Digite seu CPF: ");
        var chavePix;
        var tipoConta = leia.keyInSelect(["Corrente", "Poupanca"]) + 1;
        var titular = new Titular(nome, cpf);
        chavePix = cpf;
        
        var conta: ContaBancaria;
        if(tipoConta === 1){
            conta = new ContaCorrente(titular, chavePix);
        }else{
            conta = new ContaPoupanca(titular, chavePix);
        }

        this.save(conta);
    }

    public transferir(){
        var numeroConta = leia.question(`Informe o numero da conta: `)
        
        // var i = this.contas.findIndex(conta => conta.getNumero() === numeroOrigem);
        var indexDestino;
        for(var i = 0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
                indexDestino = i
            }
        }
        //buscar a conta de origem da transferencia
            //pedir calor da transferencia
            //verificar se tem saldo
        //buscar a conta de destino da transferencia

        //sacar da conta de origem
        //depositar conta de destino

    }

    public mostrarContas(){
        console.table(this.contas);
    }

    public removerConta(){
        //Encontrar conta (numero)
        console.log(`----------------Deletar Conta-----------------`);
            var numeroConta = leia.question(`Digite o numero de conta a ser Deletada: `);
            
        

        for(var i = 0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
                //delete
                this.contas.splice(i, 1);
                console.log(`A conta ${numeroConta} foi excluida com sucesso!!!`)
                return;
            }
        }
        console.log(`Nao foi encontrado nenhuma conta com o numero ${numeroConta}!`)

        /*var contaExiste = this.contas.find(conta => conta.getNumero() === numeroConta)
        if(!contaExiste){
        console.log(`Nao foi encontrado nenhuma conta com o numero ${numeroConta}!`)  //delete
        }*/
        // remover do array
    }
}