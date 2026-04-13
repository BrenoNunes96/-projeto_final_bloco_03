import type { categoria } from "./categoria";

export interface produto{
    id:number,
    nome:string,
    preco:number,
    foto:string,
    categoria:categoria
}