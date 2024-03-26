import { livroSchema } from "../types/Livro.js"

const livros: typeof livroSchema[] = []

export const Livros = {
    salvar(novoLivro: typeof livroSchema) {
        
        livros.push(novoLivro);
        
    },

    listarAll() {

        return livros;
        
    },

    validaIsbnExistente(isbn: number): boolean {
        return livros.some(livro => livro.isbn === isbn);
    }

}
