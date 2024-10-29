import Veiculo from './entity/Veiculo';
import './index.css';

let listaVeiculos:Veiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    let modelo = document.getElementById('modelo') as HTMLInputElement;
    let cor = document.getElementById('cor') as HTMLInputElement;
    let ano = document.getElementById('ano') as HTMLInputElement;
    let preco = document.getElementById('preco') as HTMLInputElement;
    let placa = document.getElementById('placa') as HTMLInputElement;
    let imagem = document.getElementById('imagem') as HTMLInputElement;


    const novoCarro = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value);

    listaVeiculos.push(novoCarro);
    (window as any).bancoAPI.createVeiculo(novoCarro); 


    modelo.value = "";
    cor.value = "";
    ano.value = "";
    preco.value = "";
    placa.value = "";
    imagem.value = "";

    //render abaixo
    let aside = document.getElementById("lista-veiculo");
    aside.innerHTML = "";

    for (var i = 0; i < listaVeiculos.length; i++) {
        aside.innerHTML += `
        <div class="card">
        <img src="${listaVeiculos[i].getImagem()}" alt="">
        <div class="dados">
          <strong>${listaVeiculos[i].getModelo()}</strong>
          <span>cor: ${listaVeiculos[i].getCor()}</span>
          <span>Ano: ${listaVeiculos[i].getAno()}</span>
          <span>Preço: R$${listaVeiculos[i].getPreco()}</span>
          <span>Placa: ${listaVeiculos[i].getPlaca()}</span>
        </div>
        <div class="botao-card">
          <button id="botao-ver">Ver</button>
          <button id="botao-deletar">Deletar</button>
        </div>
      </div>
        `;
    }
})
