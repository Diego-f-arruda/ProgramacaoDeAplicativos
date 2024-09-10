export default class Veiculos{
    constructor(marca: string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }

    private marca:string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    private historicoTransferencia: string[] = [];


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



