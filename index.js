import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1= new Cliente(`ricardo`, 4829472974);


const cliente2= new Cliente(`clara`,4829464974);


const contaCorrenteRicardo= new ContaCorrente();
contaCorrenteRicardo._saldo=0;
contaCorrenteRicardo.agencia=1001;
contaCorrenteRicardo.cliente=cliente1;

const contaCorrenteClara= new ContaCorrente();
contaCorrenteClara._saldo=100;
contaCorrenteClara.agencia=1001;
contaCorrenteClara.cliente=cliente2;


console.log(contaCorrenteClara);
console.log(contaCorrenteRicardo);

console.log(ContaCorrente.numeroDeContas);

