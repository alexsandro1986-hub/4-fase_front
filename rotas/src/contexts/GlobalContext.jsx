import { createContext, useState } from "react";
export const GlobalContext = createContext()


export const GlobalContextProvider = ({ children }) => {
let usuarioLogado ='Bill'
const [usuarios,setUsuarios] = useState([
    {
        id:Date.now(),
        nome:"Helle",
        email:"helle@gmail.com"
    },
    {
        id:Date.now()+1,
        nome:"Vale",
        email:"vale@gmail.com"
    },
    {
        id:Date.now()+2,
        nome:"Luthien",
        email:"luthien@gmail.com"
    }
])

    return (

        <GlobalContext.Provider value={{usuarioLogado,usuarios,setUsuarios}}>
            {children}

        </GlobalContext.Provider>
    )

}
