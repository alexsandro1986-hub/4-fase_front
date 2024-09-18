
import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Home() {
  const { usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

  function inventarUsuario() {
    let usuarioNovo={
      id:Date.now(),
      nome:"Iavana",
      email:"iavana@gmail.com"
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
      <button onClick={inventarUsuario}>Inventar Usuario</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque minus ipsa, explicabo blanditiis quod id tempore alias
        laborum nulla vel architecto corrupti saepe asperiores
        suscipit rem totam quisquam labore? Dolores.</p>
    </div>

  )
}

export default Home
