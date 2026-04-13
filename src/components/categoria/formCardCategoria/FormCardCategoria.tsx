import React, { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { atualizar, buscar, cadastrar } from '../../../service/service'
import type { categoria } from '../../../model/categoria'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'




export default function FormCardCategoria() {

const {id}= useParams<{id:string}>()
 const[categoria,setCategoria]=useState<categoria>({} as categoria)
const[isloading,setIsloading]=useState<boolean>(false)

const  buscarCategoriaporId = async (id:string)=>{
try{
await buscar(`/categorias/${id}`,setCategoria)

}catch(error){
    console.log(error)

}

}

useEffect(()=>{
if(id!==undefined){
buscarCategoriaporId(id)
}

},[id])



async function Form(e:SyntheticEvent<HTMLFormElement>){

e.preventDefault()

if(id === undefined){
    setIsloading(true)

try{

    await cadastrar('/categorias',categoria,setCategoria)
    alert("cadastrado categoria com sucesso!")
}catch(error){
    console.log(error)
}



}else{
    try{
await  atualizar("/categorias",categoria,setCategoria)
alert('atualizado com sucesso!')
    }catch(error){
        console.log(error)
    }
}
}

function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
setCategoria({
    ...categoria,[e.target.name]:e.target.value
})
}

const navigate  = useNavigate()
function retornar(){
navigate('/')
}

  return (
    <div>

    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined? 'cadastrar categoria' :'Editar categoria'}
      </h1>

      <form onSubmit={Form}className="w-1/2 flex flex-col gap-4" >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">nome da categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui da categoria"
            name='nome'
            value={categoria.nome}
            className="border-2 border-slate-700 rounded p-2"
            onChange={(e:ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
          />
        </div>

        <button onClick={retornar}
          className="rounded text-slate-100 bg-indigo-400
          hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center cursor-pointer"
          type="submit">
            {isloading?<ClipLoader color="#ffffff" size={24}/>: <span>{id===undefined ? 'cadastrar':'atualizar'}</span>  }
        </button>
      </form>
    </div>




      
    </div>
  )
}
