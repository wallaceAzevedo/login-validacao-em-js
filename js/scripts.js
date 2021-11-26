function validarFormulario() {
    var nomePessoa = document.getElementById("name");
    var sobrenome = document.getElementById("lastName"); 
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (nomePessoa.value == "") {
        alert("Favor informar o seu nome!");
    }
    if (sobrenome.value == "") {
        alert("Favor informar o seu sobrenome!");
    } 
    if (email.value == "") {
        alert("Favor digitar o seu email!");
    } 
    if (password.value == "") {
        alert("Favor digitar uma senha !");
    } return;
} 