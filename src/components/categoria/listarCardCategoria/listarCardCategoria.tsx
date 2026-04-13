
import React, { useState } from 'react'
import type { categoria } from '../../../model/categoria'

export default function listarCardCategoria() {

const[categoria,setCategoria]=useState<categoria>()





async function listarCategoria(){
try{
await listar("/categorias",categoria,setCategoria)


}catch(erro){
    console.error()
}


}


    return (






    <div>
    

      
    </div>
  )
}
