import { Link } from 'phosphor-react'
import React from 'react'
import type { categoria } from '../../../model/categoria'

interface cardProps{
    categoria:categoria
}


export default function categoria({categoria}:cardProps) {
  return (
     <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-800 text-white font-bold  text-2xl'>categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'> {categoria.nome}</p>
        <div className='flex'>
    <Link to={`/editartema/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800'>
    <button>Editar</button>
    </Link>
    <Link to={`/deletartema/${categoria.id}`}   className='text-slate-200  bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
    <button>Deletar</button>
    </Link>

        </div>
      
    </div>
  )
}
