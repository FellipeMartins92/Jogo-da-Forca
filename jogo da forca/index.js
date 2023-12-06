const palavras = {Animais: ["Canarinho", "Elefante", "Girafa", "Tigre", "Cachorro", "Gato", "Panda", "Gorila", "Cavalo", "Pirarucu", "Cobra", "Baleia"],
    Frutas: ["Carambola", "Banana", "Laranja", "Morango", "Abacaxi", "Pera", "Uva", "Kiwi", "Melancia", "Manga", "Jabuticaba", "Cereja"],
    Meses: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    Jogos: ["Dark Souls", "League of Legends", "Minecraft", "Fortnite", "World of Warcraft", "Overwatch", "Dota", "Valorant", "The Sims", "Among Us", "Rocket League", "Apex Legends"]
}

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let middle = document.getElementById("opcoes")
let pegar_escolha = document.querySelectorAll(".escolhas")
let tabuleiro_jogo = document.getElementById("middle")
let area_teclado = document.getElementById("area_teclado")
let criar_area_teclado = document.createElement("section")
criar_area_teclado.id = "teclado"
let cont = 0

pegar_escolha.forEach((evt)=>{
    evt.addEventListener("click",(el)=>{
        categoria_escolhida = el.target.innerText
        let pegar_array_jogo = palavras[categoria_escolhida]
        pegar_palavra_aleatoria = pegar_array_jogo[Math.floor(((Math.random() * 12)))]
        pegar_palavra_aleatoria = pegar_palavra_aleatoria.toUpperCase()

        middle.remove()


        for(let i = 0;i < pegar_palavra_aleatoria.length;i++){
            let criar_casinhas = document.createElement("div")
                criar_casinhas.style.width = "100px"
                criar_casinhas.style.height = "100px"
                criar_casinhas.style.marginLeft = "2px"
                criar_casinhas.style.border = "1px solid black"
        
        tabuleiro_jogo.appendChild(criar_casinhas)
        }
        for(let i = 0; i <26;i++){
            let criar_teclado = document.createElement("div")
            criar_teclado.style.width = "50px"
            criar_teclado.style.height = "50px"
            criar_teclado.style.border = "1px solid black"
            criar_teclado.style.marginLeft = "2px"
            criar_teclado.innerText = alfabeto[i]
            criar_teclado.addEventListener("click",(evt)=>{
                    for(let j = 0; j < pegar_palavra_aleatoria.length;j++){
                        if(pegar_palavra_aleatoria[j].includes(evt.target.innerText)){
                            tabuleiro_jogo.children[j].innerText = evt.target.innerText
                            remover_casa_escolhida = alfabeto.indexOf(evt.target.innerText)
                            document.getElementById("teclado").childNodes[remover_casa_escolhida].removeEventListener
                        }
                    }
            })
            criar_area_teclado.appendChild(criar_teclado)
        }
        area_teclado.appendChild(criar_area_teclado)
    })
})