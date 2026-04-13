import { Link } from 'react-router-dom';
import type { categoria } from '../../../model/categoria';

interface cardProps {
  categoria: categoria; // assumindo que sua interface 'categoria' está importada/tipada corretamente
}

export default function CategoriaCard({ categoria }: cardProps) {
  return (
    // Recomendo colocar um h-full aqui no pai se os cards precisarem ter todos o mesmo tamanho na grid
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between h-full'>
      
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
        categoria
      </header>
      
      {/* 1. Trocado 'h-full' por 'flex-1' para não vazar a tela */}
      <p className='p-8 text-3xl bg-slate-200 flex-1'>
        {categoria.nome}
      </p>
      
      <div className="flex">
        {/* 2. Textos colocados direto no Link, removido <button>, e adicionado flex/py-2 para padronizar */}
        <Link 
          to={`/editarCategoria/${categoria.id}`} 
          className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'
        >
          <button>Editar</button>
        </Link>
        
        <Link 
          to={`/deletarCategoria/${categoria.id}`} 
          className='w-full text-slate-200 bg-red-400 hover:bg-red-700 flex items-center justify-center py-2'
        >
         <button>Deletar</button>
        </Link>
      </div>

    </div>
  )
}