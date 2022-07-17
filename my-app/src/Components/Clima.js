import '../App.css';
import React from 'react';

export default function Clima(response) {
if(response){
    return (
        <>
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de Buenos Aires es:</h2>
                <p className="temperatura">23.29 <span> &#x2103; </span></p>
                <p>Temperatura Maxima 25.57 <span> &#x2103; </span></p>
                <p>Temperatura Minima 21.85 <span> &#x2103; </span></p>
            </div>
        </div>
        </>
);
}
}
