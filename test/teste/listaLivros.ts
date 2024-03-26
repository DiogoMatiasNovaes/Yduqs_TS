import { cadastraLivro } from "../../src/componentes/cadastraLivro.js";
import { listarLivros } from "../../src/componentes/listaLivros.js";
import { cadastraAutor } from "../../src/autor/cadastraAutor.Service.js";
import { cadastraCategoria } from "../../src/componentes/cadastraCategoria.js";
import { add } from "date-fns";

(() => {
    const livros = listarLivros();
    console.log('repositorio vazio', livros);
})();

(() => {
    cadastraAutor({
        nome: 'Opa',
        email: 'opa@teste.com',
        biografia: 'a'.repeat(102),
    });

    cadastraCategoria({
        categoria: 'Livre Distribuição'
    });

    cadastraCategoria({
        categoria: 'Lindo Demais'
    });
    
    cadastraLivro({
        titulo: "titulo",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 0.00,
        num_pagina: 5,
        isbn:125,
        categoria: 'Livre Distribuição',
        autor: "kkkkkkkk",
        data: add(new Date(), {days: 1})
    });


   cadastraLivro({
        titulo: "titulo",
        resumo: "resumo",
        sumario: "s".repeat(100),
        preco: 10.00,
        num_pagina: 5,
        isbn:126,
        categoria: 'Lindo Demais',
        autor: "kkkkkkkkkkkkkkk",
        data: add(new Date(), {days: 1})
    });

    const livros = listarLivros();
    console.log('repositorio com  livros cadastrados', livros);

})();
