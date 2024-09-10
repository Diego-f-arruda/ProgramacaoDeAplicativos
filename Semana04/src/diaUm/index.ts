import Banco from "./Banco";
import leia from "readline-sync";

var falidoBank = new Banco();

var opcao = 0;

do{
    console.log("--------------------------MENU----------------------------");
    opcao = leia.keyInSelect(["Criar Conta", "Transferencia", "Remover Conta", "Mostrar Contas"]) + 1;
    switch (opcao) {
        case 1:
            falidoBank.addConta();
            break;

        case 2:
            falidoBank.transferir();
            break;

        case 3:
            falidoBank.removerConta();
            break;
        
        case 4:
            falidoBank.mostrarContas();
            break;
    }
    
    console.log("------------------------------------------------------");
}while(opcao !== 0);