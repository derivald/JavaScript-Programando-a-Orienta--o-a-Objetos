export class ContaCorrente {
    agencia;
    cliente;
    // #saldo = 0 proposta de mudança para cerquilha ainda não implementada

    _saldo = 0; //boa pratica usar o _ underline ao invés da cerquilha para atributo privado

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return; //o retorno colocado primeiro
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {
        /**primeiro saca */
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); /**depois deposita */
    }
}
