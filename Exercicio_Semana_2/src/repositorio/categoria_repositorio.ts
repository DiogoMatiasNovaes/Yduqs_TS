import { categoriaSchema } from "../types/Categoria.js";
import slugify from 'slugify';

const categorias: typeof categoriaSchema[] = [];

export const Categorias = { 
    salvar(novaCategoria: typeof categoriaSchema) {
        
        categorias.push(novaCategoria);
        
    },

    listarAll() {

        return categorias;
        
    },

    validaCategoriaExistente(textoCategoria: string): boolean {
        return categorias.some(categoria => slugify(categoria.categoria, {lower: true}) === slugify(textoCategoria, {lower: true}));
    }

}
