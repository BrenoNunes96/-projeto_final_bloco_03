import Footer from "../../components/footer";
import Navbar from "../../components/navbar";



export default function Home() {
  return (
    <div>
      <Navbar/>
 <div className="flex h-screen bg-cyan-100 items-center justify-around p-10">
  

  <div>
    <h1 className="text-5xl font-bold text-gray-900">Seja bem vinde!</h1>
    <p className="text-lg text-gray-700 mt-2">Aqui você encontra Medicamentos e Cosméticos!</p>

    <button className="mt-6 bg-indigo-700 text-white px-6 py-2 rounded shadow-md hover:bg-indigo-800 transition">
      Cadastrar Produto
    </button>
  </div>


  <img src="src/assets/imagemhome.png" alt="Farmacêutica" className="w-1/3" />
</div>
<Footer/>
    </div>
  )
}
