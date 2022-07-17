import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'
import axios from 'axios'

function App() {
  const [filtro, setFiltro] = useState({ciudad: '', pais: ''})
  const [fetch, setFetch] = useState(false)
  const [response, setResponse] = useState(null)

  useEffect(async () =>  {
    const consultarAPI = async () =>{
      if(fetch){
        let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q={ciudad},{pais}&APPID=467eb2e2a1738c82e813a30610d7c354`)
        setResponse(response.data)
        setFetch(false)
      }
    }
    consultarAPI() /*hay que hacer la funcion de consultarAPI*/
  }, [fetch]
  )

  return (
    <>
   <Header />
    <div className="contenedor-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Formulario setFiltro={setFiltro} filtro={filtro}/>
                </div>
                <div className="col m6 s12">
                    <Clima response={response} />
                </div>
            </div>
        </div>
    </div>  
    </>  
  );
}

export default App;
