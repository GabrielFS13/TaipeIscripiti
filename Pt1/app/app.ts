import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegocicacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController()

const form = document.querySelector(".form") as HTMLElement
const botao = document.querySelector("#botao-importa")
if(botao){
    botao.addEventListener('click', ()=>{
        controller.importarDados()
    })
}else{
    throw Error("Botão nao encontradado")
}
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    controller.adiciona()
})
