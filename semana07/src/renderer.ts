import './index.css';
import Tarefa from './Tarefa';
import Swal from 'sweetalert2';

let tarefas: Tarefa[] = [];

//declare esta na pasta window.d
function adicionarTarefa() {
    const input = document.getElementById("adicionarItem") as HTMLInputElement;
    const tarefaTexto = input.value.trim();  // .trim removeespaços no inicio e no fim do valor 

    if (tarefaTexto === "") {
        alert("Você não adicionou um texto na lista!!")
        return;
    }

    const novaTarefa = new Tarefa(tarefaTexto);

    tarefas.push(novaTarefa);
    console.log(tarefas)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
    input.value = "";
    input.focus();
}

function render(){
    const listaTarefas = document.getElementById("lista-tarefa") as HTMLUListElement;
    listaTarefas.innerHTML = ""; //limpa para renderizar

    for (var i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        if (tarefas[i].getCompleted() === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].getText();

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].getCompleted() ? "Desmarcar" : "Concluir"
        concluir.classList.add("check");
        concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].getId()})`)

        const edit = document.createElement("span");
        edit.textContent = "Editar"
        edit.classList.add("edit");
        //edit.onclick = () => editarTarefa(tarefas[i].getId())
        edit.setAttribute("onclick", `editarTarefa(${tarefas[i].getId()})` )

        const deletar = document.createElement("span");
        deletar.textContent = "Deletar"
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tarefas[i].getId()})`)

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }

}

function trocaConcluir(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    
    const valorAtual = tarefas[index].getCompleted()
    tarefas[index].setCompleted(!valorAtual);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
    
    // if(tarefas[index].getCompleted() === true){
    //     tarefas[index].setCompleted(false);
    // }else{
    //     tarefas[index].setCompleted(true);
    // }
}

async function editarTarefa(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    //const novoTextoTarefa = prompt("Edite a tarefa", tarefas[index].getText());
    
    const {value} = await Swal.fire({
        title: "Editar Tarefa!!!",
        input: "text",
        inputLabel: "Edite Sua Tarefa Agora",
        inputValue: tarefas[index].getText(),
        showCancelButton: true,
    });
    //const acima funciona como o prompt
    if(value !== null && value.trim() !== ""){
        tarefas[index].setText(value.trim());
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
            render();
        }
    
    console.log(value);
}

function deletarTarefa(id: number){
    tarefas = tarefas.filter(tarefa => tarefa.getId() !== id); //ira puxar/filtrar todos os id diferentes do que veio como parametro
    
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    render();
}

function addPeloEnter(evento: KeyboardEvent){
    console.log(evento)
    if(evento.key === 'Enter'){
        adicionarTarefa();
    }
}

function carregarTarefas(){
    const tarefasLS = localStorage.getItem("tarefas");
    if(tarefasLS){
        tarefas = JSON.parse(tarefasLS);
        render();
    }
}


window.addPeloEnter = addPeloEnter;
window.adicionarTarefa = adicionarTarefa;
window.trocaConcluir = trocaConcluir;
window.editarTarefa = editarTarefa;
window.deletarTarefa = deletarTarefa;
window.carregarTarefas = carregarTarefas;

