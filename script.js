function gritar(){
    alert("AAAAAAAAAAAAHHHHHH!")
}

function perguntar(){
    let nome = prompt("Qua1 é o seu nome?")
    nome && alert(`Olá ${nome}`)
}

function mudar(){
    let dom = document.getElementsByTagName('h2')
    if (dom[0].innerText == "Desafio 3 - Manipulando DOM"){
        dom[0].innerText = "manipulei o DOM"
    }
    else{
        dom[0].innerText = "Desafio 3 - Manipulando DOM" 
    }
}

function vermelho(){
    let list = document.getElementsByTagName('li')
    for (let i of list){
        console.log(i)
        i.style.color="red"
    }
}

function incrementar(){
    document.getElementById('numero').textContent++
}

function sumiu(){
let dom = document.getElementsByTagName('h5')
    if (dom[0].innerText == "Desafio 6 - Ocultando e Exibindo Elementos"){
        dom[0].innerText = ""
    }
    
}

function mostrar(){
    let dom = document.getElementsByTagName('h5')
         dom[0].innerText = "Desafio 6 - Ocultando e Exibindo Elementos"
        
    }

function validar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var idade = document.getElementById("idade")
    if (nome.value === '') {
        window.alert("Por favor, preencha o campo NOME corretamente!!")
    } else if ( email.value === ''){
        window.alert("Por favor, preencha o campo EMAIL corretamente!!")
    } else if (idade.value === ''){
        window.alert("Por favor, preencha o campo IDADE corretamente!!")
    } else if (idade.value <1 || idade.value >100){ 
        window.alert("Essa idade está fora dos padrões!!")
    } else {
        window.alert("Seu formulario foi enviado com sucesso!!")
    }
}

function mostrarConteudo(menuitem) {
    let conteudo = document.getElementById("conteudo")
    if (menuitem == 1) {
        conteudo.innerText = "Conteúdo sobre HTML";
    } else if (menuitem == 2) {
        conteudo.innerText = "Conteúdo sobre JAVA SCRIPT";
    } else {
        conteudo.innerText = "Conteúdo sobre CSS";
    }
}

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
function adivinhacao(){
    var num = document.getElementById('adivi')
    if (num.value < numeroAleatorio){
        text.innerText = "O número que você que adivinhar é maior que esse!!"
    } else if (num.value > numeroAleatorio){
        text.innerText = "O número que você que adivinhar é menor que esse!!"
    } else {
        text.innerText = "Você acertou!!"
    }
}