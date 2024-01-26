const palavras = {Animais: ["Canarinho", "Elefante", "Girafa", "Tigre", "Cachorro", "Gato", "Panda", "Gorila", "Cavalo", "Pirarucu", "Cobra", "Baleia"],
    Frutas: ["Carambola", "Banana", "Laranja", "Morango", "Abacaxi", "Pera", "Uva", "Kiwi", "Melancia", "Manga", "Jabuticaba", "Cereja"],
    Meses: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],   
}

const categorias = ["Animais","Frutas","Meses"]

const area_botoes = document.getElementById("opcoes")

function criar_botoes(){
    for(let i = 0;i < categorias.length;i++){
        const novo_botao = document.createElement("button")
        novo_botao.className = "escolhas"
        novo_botao.innerText = categorias[i]
        area_botoes.appendChild(novo_botao)
    }
}

var categoria_escolhida
const middle = document.getElementById("middle")

function pegar_tema(){
    const botoes = document.querySelectorAll(".escolhas")
    botoes.forEach((categoria)=>{
        categoria.addEventListener("click",(pegar)=>{
            categoria_escolhida = pegar.target.innerText
            middle.remove()
            pegar_palavra()
        })
    })
}

var palavra_escolhida

function pegar_palavra(){
    n = Math.ceil((Math.random() * 12) - 1)
    if(categoria_escolhida == "Animais"){
        palavra_escolhida = palavras.Animais[n].toUpperCase()
    }else if(categoria_escolhida == "Frutas"){
        palavra_escolhida = palavras.Frutas[n].toUpperCase()
    }else{
        palavra_escolhida = palavras.Meses[n].toUpperCase()
    }
    console.log(palavra_escolhida)
    criar_casas_jogo()
    criar_alfabeto()
}

const casas_jogo = document.getElementById("casas_jogo")

function criar_casas_jogo(){
    for(let i = 0; i < palavra_escolhida.length;i++){
        const casas = document.createElement("div")
        casas.className = "casas_do_jogo"
        casas_jogo.appendChild(casas)
    }
}

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const teclado = document.getElementById("area_teclado")

function criar_alfabeto(){
    for(let i = 0; i < alfabeto.length;i++){
        const casa_letras = document.createElement("div")
        casa_letras.innerText = alfabeto[i]
        teclado.appendChild(casa_letras)
    }
}

function jogar(){
    teclas = document.getElementById("area_teclado")
    teclas.addEventListener("click",(evt)=>{
        letra = evt.target.innerText
        verificar_letra(letra)
        verificar_se_ganhou()
    })
}

var acertos = 0

function verificar_letra(letra){
    const casas_palavra = document.getElementById("casas_jogo")
    for(let i = 0; i < palavra_escolhida.length;i++){
        if(palavra_escolhida[i] == letra){
            casas_palavra.childNodes[i + 1].innerText = letra
            acertos++
        }
    }
}

function verificar_se_ganhou(){
    if(acertos == palavra_escolhida.length){
        alert("parabéns")
    }
}

criar_botoes()

pegar_tema()

jogar()