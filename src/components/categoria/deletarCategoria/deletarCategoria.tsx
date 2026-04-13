import React, { useEffect, useState } from 'react'
import { buscar, deletar } from '../../../service/service'
import { useNavigate, useParams } from 'react-router-dom'
import type { categoria } from '../../../model/categoria'

export default function DeletarCategoria() {
const navigate  = useNavigate()

const {id} = useParams<{id:string}>()
const [categoria,setCategoria] = useState<categoria>({} as categoria)    


async function buscarcategoriaporid(id:string){
try {
    await buscar(`/categorias/${id}`,setCategoria)

} catch (error) {
    console.log(error)
}
}




useEffect(()=>{
if(id !== undefined){
    buscarcategoriaporid(id)
}
},[id])

async  function deletarCategorias(){
    try{
await deletar(`/categorias/${id}`,categoria)
alert(`deletado a categoria ${categoria.nome}`)
    }catch(error){
        console.log(error)
    }

}
function retornar(){

navigate("/")

}
    return (
  <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
  
  <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
    Deletar Categoria
  </header>

  <p className='p-8 text-xl bg-slate-200 flex-1 text-center font-medium'>
    Você tem certeza de que deseja deletar esta categoria?
  </p>
  

  <div className="flex">
  
    <button 
      className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2 transition-colors' 
      onClick={retornar}
    >
      Não
    </button>

    <button 
      className='w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center py-2 transition-colors' 
      onClick={deletarCategorias}
    >
      Sim
    </button>
  </div>
  
</div>
  )
}
