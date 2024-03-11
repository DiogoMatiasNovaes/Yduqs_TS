import { cadastraAutor } from "../componentes/cadastraAutor.ts";
import { listaAutores } from "../componentes/listaAutores.ts";

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
