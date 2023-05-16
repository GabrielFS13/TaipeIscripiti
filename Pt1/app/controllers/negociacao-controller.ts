import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController{
    private inData: HTMLInputElement;
    private inQuantidade: HTMLInputElement;
    private inValor: HTMLInputElement;

    private negociacoes = new Negociacoes()

    constructor(){
        this.inData = document.querySelector("#data");
        this.inQuantidade = document.querySelector("#quantidade")
        this.inValor = document.querySelector("#valor")
    }

    adiciona():void{
        const negociacao = this.criaNegociacao()
        console.log(negociacao)
        this.negociacoes.adiciona(negociacao)
        this.limpaForm()
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g
        const date = new Date(this.inData.value.replace(exp, ','))
        const quantidade = parseInt(this.inQuantidade.value)
        const valor = parseFloat(this.inValor.value)
        return new Negociacao(date, quantidade, valor)
    }

    limpaForm(): void{
        this.inData.value = ''
        this.inQuantidade.value = ''
        this.inValor.value = ''

        this.inData.focus()
    }
}