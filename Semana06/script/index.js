function pegarInf(evento){
    evento.preventDefault();

    let nome = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    validaCampo(nome)
    validaCampo(email)
    validaCampo(msg)
    
    console.log(nome.value);
    console.log(email.value);
    console.log(msg.value);
    
}
function validaCampo(elemento){
    if(elemento.value === ""){
        alert("Preencha o Campo Corretamente!!")
        elemento.style.borderColor = "Red"
    }
}

function capturarTecla(evento){
    if(evento.key === `Enter`){
        pegarInf(evento);
    }
}

function verificarDisabled(){
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;
    if(nome !== "" && email !== "" && msg !== ""){
        document.getElementById("enviar").disabled = false
    }else{
        
        document.getElementById("enviar").disabled = true
    }
}