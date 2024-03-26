import { Categorias } from "../repositorio/categoria_repositorio.js";
import { categoriaSchema } from "../types/Categoria.js";

export function listaCategorias(): typeof categoriaSchema[] {

    return Categorias.listarAll();
}