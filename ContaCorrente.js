import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas=0;
    agencia;
    _saldo=0;
    _cliente;

    get saldo(){
       return  this._saldo;
    }

    set cliente(novoValor){
    if(novoValor instanceof Cliente){
    this._cliente= novoValor;}
    }
    
    get cliente(){
        return this._cliente;
    }

    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo-=valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<0){
            return;
        }
        this._saldo+=valor;
    }
  constructor(){
    ContaCorrente.numeroDeContas+=1;
  }
}