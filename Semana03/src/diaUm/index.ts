import Cachorro from "./Cachorro";
import Dono from "./Dono";



let d1 = new Dono("Alice", "(88) 8888-8889" );
let c1 = new Cachorro("Luke", "Pincher", "preto", "nanico", d1);

c1.exibirCachorro();
c1.exibirDono();

var d2 = new Dono("Diego", "(88) 8888-8888")
var c2 = new Cachorro("Pingo", "Dogue", "Branco", "Grande", d2);


c2.exibirCachorro();
c2.exibirDono();

let d3 = new Dono("Juliana", "(88) 8888-8887")
let c3 = new Cachorro("Mel", "Vira-lata", "Tricolor", "pequeno", d3)

c3.exibirCachorro();

var dataAtual = new Date();
console.log(dataAtual);