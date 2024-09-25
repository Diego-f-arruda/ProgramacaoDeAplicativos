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
    }

    tarefas.push(novaTarefa);
    console.log(tarefas)
    input.value = "";
    input.focus();
}

function render(){
    const listaTarefas = document.getElementById("lista-tarefa");
    for(var i = 0; i < tarefas.length; i++){
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = document.getElementById("adicionarItem").value;
        
    }
}