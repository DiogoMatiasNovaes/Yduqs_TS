import { cadastraAutor } from "../../src/autor/cadastraAutor.Service.js";
import { listaAutores } from "../../src/autor/listaAutores.Service.js";

(() => {
    const autores = listaAutores();
    console.log('repositorio sem dados', autores);
})();

(() => {
    cadastraAutor({
        nome: 'Opa',
        email: 'opa@teste.com',
        biografia: 'a'.repeat(300),
    });
    const autores = listaAutores();
    console.log('repositorio com autor cadastrado', autores);
})();
