import '../App.css';
import React, {useState} from 'react';


export default function Formulario() {
    
    const [filtro, setFiltro] = useState('');

    const onChangeInput = (e) =>{
        setFiltro({...filtro, [e.target.value]:e.target.value}) /*esto de los 3 puntitos es para no tener un estado para cada filtro*/
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        //aca hay que validar que esten todos los campos obligatorios bien
        //si esta todo ok --> 
        setBuscar(true);
    }

    const setBuscar = (todoOk) =>{
        if(todoOk){
            
        }
    }

    return (
      <>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field col s12">
                            <input onChange={onChangeInput} type="text" name="ciudad" id="ciudad"/>
                            <label htmlFor="ciudad">Ciudad:</label>
                        </div>
                        <noscript><div className="input-field col s12">
                            <select name="pais" id="pais">
                                <option value="">-- Seleccioná un Pais --</option>
                                <option value="US">Estados Unidos</option>
                                <option value="MX">México</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">España</option>
                                <option value="PE">Perú</option>
                            </select>
                            <label htmlFor="pais">Pais:</label>
                        </div></noscript>
                        <div className="input-field col s12">
                            <input onChange={onChangeInput} type="text" name="ciudad" id="ciudad"/>
                            <label htmlFor="ciudad">Pais:</label>
                        </div>
                        
                        <div className="input-field col s12">
                            <input type="submit" value="Buscar Clima" className="waves-effect waves-light btn-large btn-block yellow accent-4"
                            />
                        </div>
                    </form>
                    </>
);
}