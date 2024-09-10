import leia from "readline-sync"
import Revendedor from "./Revendedora";



var revenda = new Revendedor();

var opcao = 0;

do {
    console.log("--------------------------MENU----------------------------");
    opcao = leia.keyInSelect(["Adicionar Veiculo", "Buscar Veiculo", "Lista de Disponiveis", "Realizar Venda"]) + 1;

    switch (opcao) {
        case 1:
            revenda.adicionarVeiculo();
            break;

        case 2:
            revenda.buscarVeiculo();
            break;

        case 3:
            revenda.listaVeiculosDisponiveis();
            break;

        case 4:
            revenda.realizarVenda();
            break;
    }
} while (opcao !== 0)