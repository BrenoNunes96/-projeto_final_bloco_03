import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
  return (
  <nav className="bg-[#302c77] text-white px-6 py-3 flex items-center justify-between w-full font-sans">

  <div className="flex items-center gap-2 cursor-pointer">

   <Link to='/'> <svg className="w-10 h-10 text-[#ff3a3a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 10h-5V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
    </svg></Link>
    <span className="text-xl font-bold tracking-wide">FARMÁCIA</span>
    
  </div>

  <div className="flex-1 max-w-3xl mx-8">
    <div className="flex items-center bg-white rounded-lg p-1 shadow-sm">
      <input
        type="text"
        placeholder="Procurar"
        className="w-full px-4 py-1.5 text-gray-600 bg-transparent outline-none text-sm placeholder-gray-400"
      />
      <button className="bg-[#2563eb] hover:bg-blue-700 text-white p-2 rounded-md transition-colors flex items-center justify-center">

        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </div>

 <div className="flex items-center gap-8">
    
  
    <div className="hidden md:flex items-center gap-6 text-sm font-normal">
  <Link to='/categorias' > Categorias</Link>
    <Link to='/CadastrarCategoria' > Cadastrar Categorias</Link>
    </div>

    <div className="flex items-center gap-4">

      <button className="hover:text-gray-300 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </button>

      <button className="hover:text-gray-300 transition-colors relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </button>
    </div>
    
  </div>
</nav>
  )
}
