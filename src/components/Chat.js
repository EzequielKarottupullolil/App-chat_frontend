import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Chat(props) {
    const [mensajes,setMensajes] = useState([]);
    const {idChat} = props;
    const pedirMensajes = ()=>{
        /* Pide todos los mensajes del chat*/
        axios.get(`http://localhost:4000/api/mensajes/${idChat}`)
        .then(response=>{
            //Guarda los mensajes en el estado
            setMensajes(response.data);
        })
    }
    return (
        <>
            <h1>hola</h1>
        </>
    );

}


