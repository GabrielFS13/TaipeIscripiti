import { escape } from "../decorators/espacape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegocicacoesView extends View<Negociacoes>{

    @escape
    protected template(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered"> 
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(item => {
                        return `
                                <tr>
                                    <td>${this.formatar(item.data)}</td>
                                    <td>${item.quantidade}</td>
                                    <td>${item.valor}</td>
                                </tr>`
                    }).join("")}
                </tbody>
            <table/>
        `
    }

    private formatar(date: Date){
        return new Intl.DateTimeFormat().format(date)
    }

    update(model: Negociacoes): void{
        this.elemento.innerHTML = this.template(model)
    }
}