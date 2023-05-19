import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegocicacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController()

const form = document.querySelector(".form") as HTMLElement

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    controller.adiciona()
})
