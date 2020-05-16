var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

var registro = [{
    nome: "Adm",
    email: "adm@gmail.com",
    senha: "123456"
}]

function entrar() {

    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (email == 0 || senha == 0) {
        alert("Preencha todos os campos")
        return
    } 

    for (i = 0; i < registro.length; i++) {

        if (senha == registro[i].senha && email == registro[i].email) {

            //envia pra uma tela póslogin
            window.location = "https://www.youtube.com/watch?v=dhr8xFgK518"
            return
        }
    }
    alert('Senha ou usuário invalido')
}


function registra() {
    var nomeR = document.getElementById("nomeR").value
    var emailR = document.getElementById("emailR").value
    var senhaR = document.getElementById("senhaR").value

    if (nomeR == 0 || emailR == 0 || senhaR == 0) {
        alert("Preencha todos os campos")
        return
    } 

    for (i = 0; i < registro.length; i++) {
        if (emailR == registro[i].email) {
            alert("Email já cadastrado")
            return
        }
    }

    var newUser = {
        nome: nomeR,
        email: emailR,
        senha: senhaR,
    }

    registro.push(newUser)

    // mostra os valores do array no console do navegador 
    console.log(registro)


}
