import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

var c1 = new ContaBancaria(new Titular("Diego", "000.000.000-01"), "000.000.000-01");

c1.verSaldo();
c1.depositar(150000);
c1.sacar(1400);
c1.mostrarDadosConta();