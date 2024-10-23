import './index.css';

let listaVeiculos:any = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    let modelo = document.getElementById('modelo') as HTMLInputElement;
    let cor = document.getElementById('cor') as HTMLInputElement;
    let ano = document.getElementById('ano') as HTMLInputElement;
    let preco = document.getElementById('preco') as HTMLInputElement;
    let placa = document.getElementById('placa') as HTMLInputElement;
    let imagem = document.getElementById('imagem') as HTMLInputElement;

    const novoCarro = {
        modelo: modelo.value,
        cor: cor.value,
        ano: ano.value,
        preco: preco.value,
        placa: placa.value,
        imagem: imagem.value
    }

    listaVeiculos.push(novoCarro);
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
        <img src="${listaVeiculos[i].imagem}" alt="">
        <div class="dados">
          <strong>${listaVeiculos[i].modelo}</strong>
          <span>cor: ${listaVeiculos[i].cor}</span>
          <span>Ano: ${listaVeiculos[i].ano}</span>
          <span>Preço: R$${listaVeiculos[i].preco}</span>
          <span>Placa: ${listaVeiculos[i].placa}</span>
        </div>
        <div class="botao-card">
          <button id="botao-ver">Ver</button>
          <button id="botao-deletar">Deletar</button>
        </div>
      </div>
        `;
    }
})
