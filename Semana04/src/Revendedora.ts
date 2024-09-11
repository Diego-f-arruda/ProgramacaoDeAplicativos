import leia from "readline-sync";
import Veiculos from "./Veiculo";
import Carro from "./Carro";
import Moto from "./Moto";

export default class Revendedor{
    private listaVeiculos: Array<Veiculos> = [];

    private save(veiculo: Veiculos){
        this.listaVeiculos.push(veiculo);

    }

    public adicionarVeiculo(){
        var marca = leia.question("Qual a marca do veiculo? ");
        var modelo = leia.question("Qual o modelo do veiculo? ");
        var ano = leia.questionInt("Informe o Ano: ");
        var valor = leia.questionFloat("Informe o valor: ");
        var disponibilidade = leia.keyInSelect(["Disponivel", "Indisponivel"]) + 1;
        var disponivel;
        if(disponibilidade === 1){
            disponivel = true;
        }else{
            disponivel = false;
        }
        
        var opcao = leia.keyInSelect(["carro", "Moto"]) +1;
        var veiculo = new Veiculos(marca, modelo, ano, valor, disponivel);

        
        if(opcao === 1){
            veiculo = new Carro(marca, modelo, ano, valor, disponivel);
        }else{
            veiculo = new Moto(marca, modelo, ano, valor, disponivel)
        }

        this.save(veiculo);
    }

    public buscarVeiculo(){

    }

    public listaVeiculosDisponiveis(){
        var index;
        index = this.listaVeiculos.findIndex(veiculo => veiculo.getDisponivel() === true);
        console.table(this.listaVeiculos)
    }

    public realizarVenda(){

    }
}
