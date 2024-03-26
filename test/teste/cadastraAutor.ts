import { cadastraAutor } from "../../src/autor/cadastraAutor.Service.js";

(() => {
    const { success, autor, erros} = cadastraAutor({
        nome: '          ',
        email: 'teste@teste.com',
        biografia: 'a'.repeat(222),
    });
    console.log('valida nome', {success, autor, erros});
})();

(() => {
    const { success, autor, erros} = cadastraAutor({
        nome: 'teste',
        email: 'teste',
        biografia: 'a'.repeat(221),
    });
    console.log('valida email', {success, autor, erros});
})();

(() => {
    const { success, autor, erros} = cadastraAutor({
        nome: 'teste',
        email: 'teste@teste.com',
        biografia: 'a',
    });
    console.log('valida biografia tamanho minimo 100', {success, autor, erros});
})();

(() => {
    const { success, autor, erros} = cadastraAutor({
        nome: 'teste',
        email: 'teste@teste.com',
        biografia: 'a'.repeat(555),
    });
    console.log('valida biografia tamanho maximo 500', {success, autor, erros});
})();

(() => {
    let resultado:{ success, autor, erros} = cadastraAutor({
        nome: 'teste',
        email: 'teste@teste.com',
        biografia: 'a'.repeat(101),
    });

    resultado = cadastraAutor({
        nome: 'teste2',
        email: 'teste@teste.com',
        biografia: 'a'.repeat(101),
    });

    console.log('autor duplicado', resultado);
})();

(() => {
    let resultado:{ success, autor, erros} = cadastraAutor({
        nome: 'teste3',
        email: 'teste3@teste.com',
        biografia: 'a'.repeat(101),
    });

    console.log('autor ok', resultado);
})();