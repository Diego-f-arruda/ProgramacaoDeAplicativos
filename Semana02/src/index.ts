import Cachorro from "./Cachorro";
import Dono from "./Dono";



let c1 = new Cachorro();
let d1 = new Dono();
c1.nome = "Luke";
c1.raca = "Pincher";
c1.cor = "preto";
d1.nome = "Alice";
d1.telefone = "(88) 8888-8889"

c1.dono = d1;
c1.exibirCachorro();
c1.exibirDono();

var c2 = new Cachorro();
c2.nome = "Pingo";
c2.raca = "Dogue";
c2.cor = "Branco";
c2.dono = new Dono();
c2.dono.nome = "Diego";
c2.dono.telefone = "(88) 8888-8888";

c2.exibirCachorro();
c2.exibirDono();

let c3 = newCachorro("Mel", "Vira-lata", "Tricolor", )

var dataAtual = new Date();
console.log(dataAtual);