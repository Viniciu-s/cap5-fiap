function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "1234"){
        alert('Sucesso');
        location.href = "page.html";
    }else{
        alert("Dados inválidos")
    }
    
}