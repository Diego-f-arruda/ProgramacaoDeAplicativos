import leia from "readline-sync"
import Veiculos from "./Veiculo";

export default class Carro extends Veiculos{
    private numeroPortas: number;

    constructor(marca: string, modelo: string, ano: number, valor: number, disponivel: boolean){
        super(marca, modelo, ano, valor, disponivel);
        this.numeroPortas = 2;
    }

    public override detalhesVeiculos(): void {
        this.numeroPortas = leia.questionInt("Informe o numero de portas: ")
    }

}