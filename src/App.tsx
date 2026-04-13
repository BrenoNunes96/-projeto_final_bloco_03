import { useState } from 'react'

import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListarCardCategoria from './components/categoria/listarCardCategoria/listarCardCategoria'
import FormCardCategoria from './components/categoria/formCardCategoria/FormCardCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/deletarCategoria'


function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/categorias' element={<ListarCardCategoria/>}/>
    <Route path='/editarCategoria/:id'element={<FormCardCategoria/>} />
    <Route path='/CadastrarCategoria'element={<FormCardCategoria/>} />
       <Route path='/deletarCategoria/:id'element={<DeletarCategoria/>} />







  </Routes>
  </BrowserRouter>


      </> 
  )
}

export default App
