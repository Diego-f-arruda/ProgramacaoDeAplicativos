import leia from "readline-sync"

export default class Veiculos{
    constructor(marca: string, modelo:string, ano: number, valor: number, disponivel: boolean){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.disponivel = disponivel;
    }

    private marca:string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    private historicoTransferencia: string[] = [];


public detalhesVeiculos(){

}

    public getAno() : number {
        return this.ano;
    }

    public setAno(ano: number): void{
        this.ano = ano;
    }

    public getValor(): number{
        return this.valor;
    }

    public setValor(valor: number): void{
        this.valor = valor;
    }

    public getDisponivel(): boolean{
        return this.disponivel;
    }

    public setDisponivel(disponivel: boolean): void{
        this.disponivel = disponivel;
    }

    public getHistoricoTransferencia(): string[]{
        return this.historicoTransferencia;
    }

    public setHistoricoTransferencia(histTransf: string[]): void{
        this.historicoTransferencia = histTransf;
    }


}



