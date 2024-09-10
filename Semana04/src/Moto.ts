import leia from "readline-sync"
import Veiculos from "./Veiculo";

export default class Moto extends Veiculos{
    private cilindradas: number;

    constructor(marca: string, modelo: string, ano: number, valor: number, disponivel: boolean){
        super(marca, modelo, ano, valor, disponivel);
        this.cilindradas = 0;
    }

    public override detalhesVeiculos(): void {
        this.cilindradas = leia.questionInt("Informe as cilindradas: ")
    }

}