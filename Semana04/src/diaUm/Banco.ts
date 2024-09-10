import leia from "readline-sync";
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class Banco {
    private contas: Array<ContaBancaria> = [];


    private save(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`Sua conta ${conta.getNumero()} foi criada com sucesso!`);
    }

    public addConta() {
        var nome = leia.question(`Digite seu nome: `);
        var cpf = leia.question("Digite seu CPF: ");
        var chavePix;
        var tipoConta = leia.keyInSelect(["Corrente", "Poupanca"]) + 1;
        var titular = new Titular(nome, cpf);
        chavePix = cpf;

        var conta: ContaBancaria;
        if (tipoConta === 1) {
            conta = new ContaCorrente(titular, chavePix);
        } else {
            conta = new ContaPoupanca(titular, chavePix);
        }

        this.save(conta);
    }

    public transferir() {

        //buscar a conta de origem da transferencia
        var indexOrigem;
        var numeroContaOrigem = leia.question("Informe o numero da sua Conta: ")
        for (var i = 0; i < this.contas.length; i++) {
            console.log(``)
            if (this.contas[i].getNumero() === numeroContaOrigem) {
                indexOrigem = i;
            }
        }
        if (indexOrigem === undefined) {
            console.log("A conta nao existe.");
            return;
        }
        var indexDestino;
        
        var numeroContaDestino = leia.question("Informe a conta de destino: ");
        indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroContaDestino);//comando seta = comando simplificado
        if (indexDestino === -1) {
            console.log("A conta de destino informada nao existe...");
            return;
        }
        var valor = leia.questionFloat("Informe o valor da transferencia: ");
        if(valor > this.contas[indexOrigem].getSaldo()){
            console.log("Nao possue saldo suficiente!!!");
            return;
        }

        this.contas[indexOrigem].sacar(valor);
        this.contas[indexDestino].depositar(valor);
        console.log(`Sua Transferencia de ${valor} foi feita com sucesso!`)


        //pedir calor da transferencia
        //verificar se tem saldo
        //buscar a conta de destino da transferencia

        //sacar da conta de origem
        //depositar conta de destino

    }

    public mostrarContas() {
        console.table(this.contas);
    }

    public removerConta() {
        //Encontrar conta (numero)
        console.log(`----------------Deletar Conta-----------------`);
        var numeroConta = leia.question(`Digite o numero de conta a ser Deletada: `);



        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
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