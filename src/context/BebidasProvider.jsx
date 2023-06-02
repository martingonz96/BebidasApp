import axios from "axios";
import { useState, createContext, useEffect } from "react";

const BebidasContext = createContext()


const BebidasProvider = ({children}) => {

  const [modal, setModal] = useState(false)

  const [bebidas, setBebidas] = useState([

  ])

  const [bebidaId , setBebidaId] = useState(null)

  const [receta, setReceta] = useState({})

  const [cargando , setCargando] = useState(false)

  useEffect(()=>{

    setCargando(true)

    const obtenerReceta = async () =>{

          if(!bebidaId)return

          try {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

            const { data } = await axios(url)

            setReceta(data.drinks[0])
            
          } catch (error) {
            console.log(error)
          }
          finally {
            setCargando(false)
           }
    }

    obtenerReceta()

  },[bebidaId])

  const consultarBebidas = async datos => {
     try {

      const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

      const { data } = await axios(url)

      setBebidas(data.drinks)
      
     } catch (error) {
       console.log(error)
     }

  }

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleBebidaIdClick = id => {
    setBebidaId(id)
  }

     
    return (
      <BebidasContext.Provider
      
      value={{
        consultarBebidas,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        setReceta,
        cargando
      }}
      
      >
        {children}
      </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext