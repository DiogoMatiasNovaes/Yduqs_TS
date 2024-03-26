import { cadastraLivro } from "../../src/componentes/cadastraLivro.js";
import { cadastraAutor } from "../../src/componentes/cadastraAutor.js";
import { cadastraCategoria } from "../../src/componentes/cadastraCategoria.js";
import { add, sub } from "date-fns";
import { listarLivros } from "../../src/componentes/listaLivros.js";

(() => {

    cadastraAutor({
        nome: 'Opa',
        email: 'opa@teste.com',
        biografia: 'a'.repeat(102),
    });
    
    let retorno:{ success, livro, erros} = cadastraLivro({
        titulo: "titulo",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn:125,
        categoria: "categoria",
        autor: "kkkkkkkkk",
        data: add(new Date(), {days: 1}) 
    });
    console.log('valida categoria não cadstrada', retorno);

    cadastraCategoria({categoria: 'Livre Distribuição'});
    cadastraCategoria({categoria: 'categoria'});
    
    retorno = cadastraLivro({
        titulo: "titulo",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn:125,
        categoria: "Livre Distribuição",
        autor: "gdsfgsdfg",
        data: add(new Date(), {days: 1})
    });
    console.log('valida autor não cadastrado', retorno);

    retorno = cadastraLivro({
        titulo: "",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn:126,
        categoria: "categoria",
        autor: "xstrttrb",
        data: add(new Date(), {days: 1})
    });
    console.log('valida título', retorno);

    retorno = cadastraLivro({
        titulo: "titulo",
        resumo: "",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn:127,
        categoria: "categoria",
        autor: "nnhnhnhnhnhn",
        data: add(new Date(), {days: 1})
    });
    console.log('valida resumo', retorno);

    retorno = cadastraLivro({
        titulo: "titulo",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn: 133,
        categoria: "categoria",
        autor: "tytytytyt",
        data: add(new Date(), {days: 1})
    });
    console.log('valida num pagina sucesso', retorno);

   

    const livros = listarLivros();
    console.log("-------------------------->> ", livros);


})();
