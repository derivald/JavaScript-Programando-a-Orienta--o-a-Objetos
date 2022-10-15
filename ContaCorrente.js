import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    // #saldo = 0 proposta de mudança para cerquilha ainda não implementada

    set cliente(novoValor){/**Assessor set */
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){/**assessor get */
        return this._cliente;
        }
    

    _saldo = 0; //boa pratica usar o _ underline ao invés da cerquilha para atributo privado

    get saldo(){
        return this._saldo;
    }

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
