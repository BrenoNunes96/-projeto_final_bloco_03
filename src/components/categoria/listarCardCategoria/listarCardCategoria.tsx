

import { useEffect, useState } from 'react'
import type { categoria } from '../../../model/categoria'
import { buscar } from '../../../service/service'
import { SyncLoader } from 'react-spinners'
import CategoriaCard from '../cardCategoria/Cardcatergoria'

export default function ListarCardCategoria() {

const[categoria,setCategoria]=useState<categoria[]>([])


const[isloading,setIsloading] = useState<boolean>(false)


async function listarCategoria(){
    setIsloading(true)
try{

await buscar("/categorias",setCategoria)


}catch(error:any){
    console.error()
}finally{
  setIsloading(false)
}


}

useEffect(()=>{

listarCategoria()

},[categoria.length])

    return (
 <div>
  
        {isloading &&( <div className ='flex justify-center w-full my-8'>       

<SyncLoader color="#312e81" size={32}/> 


        </div>) }



 <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {
                    (!isloading && categoria.length === 0) && (
	<span className="text-3xl text-center my-8">
		Nenhum Tema foi encontrado!
	</span>
)
}
<div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">

  {categoria.map((x)=>(<CategoriaCard key={x.id} categoria={x}/>))}
</div>
  </div>
    </div>
    </div>
  )
}
