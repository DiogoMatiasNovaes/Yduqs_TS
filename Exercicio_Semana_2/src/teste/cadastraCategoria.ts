import { cadastraCategoria } from "../componentes/cadastraCategoria.ts";

(() => {
    let resultado:{ success, categoria, erros} = cadastraCategoria({
        categoria: 'teste1'});
    
    console.log('ok',resultado);

    resultado = cadastraCategoria({
           categoria: 'teste2'});
        
    console.log('ok',resultado);

    resultado = cadastraCategoria({
        categoria: 'teste3'});
     
    console.log('ok',resultado);

})();