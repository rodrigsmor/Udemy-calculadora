class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._dataAtual;
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        return this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        this._dataAtual = valor;
    }
}

// _ (underline) = significa um atributo privado
// cria métodos e atributos da classe