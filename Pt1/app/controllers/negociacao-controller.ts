import { domInject } from '../decorators/domInject.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempo } from '../decorators/logar-tempo.js';
import { DiasDaSemana } from '../enums/dia-da-semana.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegocicacoesView } from '../views/negociacoes-view.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController{
    @domInject("#data")
    private inData: HTMLInputElement;
    @domInject("#quantidade")
    private inQuantidade: HTMLInputElement;
    @domInject("#valor")
    private inValor: HTMLInputElement;
    private negociacoesView = new NegocicacoesView("#negociacoesView", true)
    private msgView = new MensagemView("#mensagemView")

    private negociacoes = new Negociacoes()
    private servico = new NegociacoesService()

    constructor(){
        this.attView()
    }
    @logarTempo()
    @inspect
    adiciona():void{
        const negociacao = Negociacao.criaDe(this.inData.value, this.inQuantidade.value, this.inValor.value)
        if(this.ehUtil(negociacao.data)){
            this.negociacoes.adiciona(negociacao)
            this.negociacoesView.update(this.negociacoes)
            this.attView()
            this.limpaForm()
        }else{
            this.msgView.update("Dia somente dias úteis!")
        }
        
    }

    private limpaForm(): void{
        this.inData.value = ''
        this.inQuantidade.value = ''
        this.inValor.value = ''

        this.inData.focus()
    }

    private attView(): void{
        this.msgView.update("Adicionado com sucesso!")
        this.negociacoesView.update(this.negociacoes)

    }

    importarDados(): void{
        this.servico.obterNegociacoes()
       .then(negociacoesDeHoje =>{
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao)
            }
            this.negociacoesView.update(this.negociacoes)
       })
    }

    private ehUtil(data: Date):boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}