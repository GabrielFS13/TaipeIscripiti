export class Negociacao {
    constructor(
        readonly _data: Date,
        readonly quantidade: number, 
        readonly valor: number
        ){}

    get volume(): number{
        return this.quantidade * this.valor
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    public static criaDe(data: string, qnt: string, val: string): Negociacao{
        const exp = /-/g
        const date = new Date(data.replace(exp, ','))
        const quantidade = parseInt(qnt)
        const valor = parseFloat(val)
        return new Negociacao(date, quantidade, valor)
    }
}