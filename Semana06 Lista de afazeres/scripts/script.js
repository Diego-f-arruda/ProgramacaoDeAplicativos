
let tarefas = [];

function adicionaTarefa() {
    const input = document.getElementById("adicionarItem");
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === "") {
        alert("Você não adicionou um texto na lista!!")
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 10000000),
        text: tarefaTexto,
        completed: false
        //COLOCAR UM VERIFICADOR DE ID REPETIDO!!!!!
    }

    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
    input.value = "";
    input.focus();
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa");
    listaTarefas.innerHTML = ""; //verificar

    for (var i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        if (tarefas[i].completed === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].text;

        span.textContent = //valor iconoe

        

        const concluir = document.createElement("span");
        concluir.textContent = "check"
        concluir.classList.add = "material-symbols-outlined"
        concluir.classList.add("check");
        concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].id})`)

        const edit = document.createElement("span");
        edit.textContent = "edit_note"
        edit.classList.add = "material-symbols-outlined"
        edit.classList.add = "Editar";
        edit.classList.add("edit");
        edit.setAttribute("onclick", `editarTarefa(${tarefas[i].id})` )

        const deletar = document.createElement("span");
        deletar.textContent = "delete_forever"
        deletar.classList.add = "material-symbols-outlined"
        deletar.classList.add = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tarefas[i].id})`)

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}

function trocaConcluir(id){
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    const valorAtual = tarefas[index].completed
    tarefas[index].completed = !valorAtual;
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
}

function editarTarefa(id){
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    const novoTextoTarefa = prompt("Edite a tarefa", tarefas[index].text);

    if(novoTextoTarefa !== null && novoTextoTarefa.trim() !== ""){
        tarefas[index].text = novoTextoTarefa;
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        render();
    }
}

function deletarTarefa(id){
    tarefas = tarefas.filter(tarefa => tarefa.id !== id); //ira puxar/filtrar todos os id diferentes do que veio como parametro
    
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    /*const index = tarefas.findIndex(tarefa => tarefa.id === id);
    tarefas.splice(index, 1);*/
    render();
}

function addPeloEnter(evento){
    if(evento.key == "Enter"){
        adicionaTarefa();
    }
}

function carregarTarefas(){
    const tarefasLS = localStorage.getItem("tarefas");
    if(tarefasLS){
        tarefas = JSON.parse(tarefasLS);
        render();
    }
}