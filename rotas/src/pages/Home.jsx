
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Home() {
  const { usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)
const [inputNome, setinputNome]=useState('')
const [inputEmail, setinputEmail]=useState('')
const [inputDeleteNome, setinputDeleteNome]=useState('')
function cadastrarUsuario() {
  let usuarioNovo={
    id:Date.now(),
    nome:inputNome,
    email:inputEmail
  }
  setUsuarios([...usuarios,usuarioNovo])
}

  function inventarUsuario() {
    let usuarioNovo={
      id:Date.now(),
      nome:"Iavana",
      email:"iavana@gmail.com"
    }
    setUsuarios([...usuarios,usuarioNovo])
  }
  function deletarUsuario() {
    let usuarioNovo={
      id:Date.now(),
      nome:inputDeleteNome,
      email:setinputDeleteNome
    }
    setUsuarios([...usuarios,usuarioNovo])
  }
  return (
    <div>
      <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      <div>
        {
          usuarios.map((usuario) => (
            <div key={usuario.id}>
                <p>Nome:{usuario.nome}</p>
                <p>Email:{usuario.email}</p>
                <p>{usuario.id}</p>
            </div>
          ))
        }
      </div>
        <label htmlFor="">Nome</label>
        <input type="text"
        value={inputNome}
        onChange={(event) => setinputNome(event.target.value)}/>
        <label htmlFor="">Nome</label>

        <input type="text"
        value={inputEmail}
        onChange={(event) => setinputEmail(event.target.value)}/>
        <button onClick={cadastrarUsuario}>casdastrar</button>

      <button onClick={inventarUsuario}>Inventar Usuario</button>
      <button onClick={deletarUsuario}>deletar</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque minus ipsa, explicabo blanditiis quod id tempore alias
        laborum nulla vel architecto corrupti saepe asperiores
        suscipit rem totam quisquam labore? Dolores.</p>
    </div>

  )
}

export default Home
